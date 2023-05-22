export type QuestionCardType = {
  id: number;
  title: string;
  description: string;
  type: number;
  option: QuestionOptionType[];
  divider?: boolean;
  index?: number;
};

export type QuestionType = {};

export type QuestionOptionType = {
  label: string;
  value: string | number | boolean;
};
