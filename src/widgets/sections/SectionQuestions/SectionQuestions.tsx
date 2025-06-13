import { Fragment } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";

import CardQuestion from "../../cards/CardQuestion/CardQuestion";

// import { dataCiscoQuestions } from "../../../shared/data/dataCiscoQuestions";
import dataPiKSA from "../../../shared/data/dataPiKSA";
import dataProgFunc from "../../../shared/data/dataProgFunc";
import dataJiPP from "../../../shared/data/dataJiPP";

import "./SectionQuestions.scss";

type Props = {
  inputValue: string;
};

const SectionQuestions = ({ inputValue }: Props) => {
  const location = useLocation();

  let currentData;
  if (location.pathname === "/piksa") {
    currentData = dataPiKSA;
  } else if (location.pathname === "/prog-funk") {
    currentData = dataProgFunc;
  } else if (location.pathname === "/jipp") {
    currentData = dataJiPP;
  }

  if (!currentData)
    return (
      <>
        <div>Please choose a subject</div>
      </>
    );

  return (
    <section className="section-questions">
      {currentData
        .filter((question) => question.question.toLowerCase().includes(inputValue.toLowerCase()))
        .map((question, index) => (
          <Fragment key={index}>
            <CardQuestion question={question} key={question.id} />
            <hr className="section-questions__line" />
          </Fragment>
        ))}
    </section>
  );
};

export default SectionQuestions;
