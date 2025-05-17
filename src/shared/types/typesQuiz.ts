export type Answer = {
  option: string;
  correct: boolean;
};

export type Question = {
  id: number;
  question: string;
  multi?: boolean;
  answers: Answer[];
};
