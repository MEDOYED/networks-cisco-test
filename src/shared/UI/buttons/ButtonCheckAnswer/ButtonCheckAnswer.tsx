import "./ButtonCheckAnswer.scss";
import type { Answer } from "../../../types/typesQuiz";

type Props = {
  selected: string[];
  answers: Answer[];
  onCheck: (isCorrect: boolean) => void;
  disabled: boolean;
  isCorrect: boolean | null;
};

const ButtonCheckAnswer = ({ selected, answers, onCheck, disabled, isCorrect }: Props) => {
  const checkAnswer = () => {
    const correctOptions = answers.filter((a) => a.correct).map((a) => a.option);
    const isCorrect =
      correctOptions.length === selected.length &&
      correctOptions.every((opt) => selected.includes(opt));

    onCheck(isCorrect);
  };

  return (
    <button
      className="button-check-answer"
      type="button"
      disabled={disabled}
      onClick={checkAnswer}
      style={{ backgroundColor: disabled ? (isCorrect ? "green" : "red") : "inherit" }}>
      Sprawdź
    </button>
  );
};

export default ButtonCheckAnswer;
