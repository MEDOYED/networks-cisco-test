import { Fragment } from "react/jsx-runtime";

import CardQuestion from "../../cards/CardQuestion/CardQuestion";

import { dataCiscoQuestions } from "../../../shared/data/dataCiscoQuestions";

import "./SectionQuestions.scss";

type Props = {
  inputValue: string;
};

const SectionQuestions = ({ inputValue }: Props) => {
  return (
    <section className="section-questions">
      {dataCiscoQuestions
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
