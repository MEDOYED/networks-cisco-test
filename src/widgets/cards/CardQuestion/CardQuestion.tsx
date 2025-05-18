import { useState } from "react";

import ButtonCheckAnswer from "../../../shared/UI/buttons/ButtonCheckAnswer/ButtonCheckAnswer";

import type { Question } from "../../../shared/types/typesQuiz";

import "./CardQuestion.scss";

type PropsTypes = {
  question: Question;
};

const CardQuestion = ({ question }: PropsTypes) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const toggleAnswer = (option: string) => {
    if (question.multi) {
      setSelected((prev) =>
        prev.includes(option) ? prev.filter((opt) => opt != option) : [...prev, option]
      );
    } else {
      setSelected([option]); // radio (question with 1 correct answer)
    }
  };

  return (
    <article className="card-question">
      <h2 className="card-question__question">{question.question}</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset>
          <legend className="card-question__subtitle">Wybierz poprawną odpowiedź:</legend>

          {question.answers.map((answer, i) => {
            const isSelected = selected.includes(answer.option);
            const showFeedback = checked && answer.correct;

            return (
              <label className="card-question__option-wrapper" key={i}>
                <input
                  type={question.multi ? "checkbox" : "radio"}
                  name={`question-${question.id}`}
                  value={answer.option}
                  checked={isSelected}
                  onChange={() => toggleAnswer(answer.option)}
                  disabled={checked}
                />
                <span
                  style={{
                    color: showFeedback ? "green" : isSelected && checked ? "red" : "inherit",
                  }}>
                  {answer.option}
                </span>
              </label>
            );
          })}
        </fieldset>

        <ButtonCheckAnswer
          selected={selected}
          answers={question.answers}
          onCheck={(result) => {
            setIsCorrect(result);
            setChecked(true);
          }}
          disabled={checked}
          isCorrect={isCorrect}
        />

        {checked && (
          <p style={{ color: isCorrect ? "green" : "red" }}>{isCorrect ? "Dobrze!" : "Źle!"}</p>
        )}
      </form>
    </article>
  );
};

export default CardQuestion;
