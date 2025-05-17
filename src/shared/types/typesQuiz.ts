export type Question = {
  id: number;
  question: string;
  multi?: boolean;
  answers: {
    option: string;
    correct: boolean;
  }[];
};
