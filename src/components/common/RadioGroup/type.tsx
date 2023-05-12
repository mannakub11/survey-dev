import { ReactNode } from "react";

export type RadioGroupProps = {
  value?: string;
  name?: string;
  onChange?: (value: string) => void;
  row?: boolean;
  children: ReactNode;
};
