import { ButtonProps } from "@mui/material";
import { ReactNode } from "react";

export type FooterProp = {
  children?: ReactNode;
  backgroundColor?: string;
};

export type ButtonFooterProp = {
  isValid?: boolean;
  onClick?: () => void;
} & Omit<ButtonProps, "onClick">;
