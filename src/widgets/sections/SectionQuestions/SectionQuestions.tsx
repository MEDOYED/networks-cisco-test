import { Fragment } from "react/jsx-runtime";

import CardQuestion from "../../cards/CardQuestion/CardQuestion";

import { dataQuestions } from "../../../shared/data/dataQuestions";

import "./SectionQuestions.scss";

const SectionQuestions = () => {
  return (
    <section className="section-questions">
      {dataQuestions.map((question, index) => (
        <Fragment key={index}>
          <CardQuestion question={question} key={question.id} />
          <hr className="section-questions__line" />
        </Fragment>
      ))}
    </section>
  );
};

export default SectionQuestions;
