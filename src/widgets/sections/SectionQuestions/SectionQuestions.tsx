import CardQuestion from "../../cards/CardQuestion/CardQuestion";

import { dataQuestions } from "../../../shared/data/dataQuestions";

import "./SectionQuestions.scss";

const SectionQuestions = () => {
  return (
    <>
      <div>
        {dataQuestions.map((question) => (
          <CardQuestion question={question} key={question.id} />
        ))}
      </div>
    </>
  );
};

export default SectionQuestions;
