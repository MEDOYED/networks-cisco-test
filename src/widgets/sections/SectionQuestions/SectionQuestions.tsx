import { Fragment } from "react/jsx-runtime";

import CardQuestion from "../../cards/CardQuestion/CardQuestion";

import { dataQuestions } from "../../../shared/data/dataQuestions";

import "./SectionQuestions.scss";

type Props = {
  inputValue: string;
};

const SectionQuestions = ({ inputValue }: Props) => {
  return (
    <section className="section-questions">
      {dataQuestions
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
