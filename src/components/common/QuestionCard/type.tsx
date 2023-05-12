export type QuestionCardType = {
  id: number;
  title: string;
  description: string;
  type: number;
  option: QuestionOptionType[];
};

export type QuestionType = {};

export type QuestionOptionType = {
  label: string;
  value: string | number | boolean;
};
