import "./ButtonCheckAnswer.scss";
import type { Answer } from "../../../types/typesQuiz";

type Props = {
  selected: string[];
  answers: Answer[];
  onCheck: (isCorrect: boolean) => void;
  disabled: boolean;
};

const ButtonCheckAnswer = ({ selected, answers, onCheck, disabled }: Props) => {
  const checkAnswer = () => {
    const correctOptions = answers.filter((a) => a.correct).map((a) => a.option);
    const isCorrect =
      correctOptions.length === selected.length &&
      correctOptions.every((opt) => selected.includes(opt));

    onCheck(isCorrect);
  };

  return (
    <button type="button" disabled={disabled} onClick={checkAnswer}>
      Sprawdź
    </button>
  );
};

export default ButtonCheckAnswer;
