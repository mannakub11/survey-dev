import styled from "styled-components";

import { GRADIENT_PRIMARY, GRAY_EAF0F5 } from "../../../constants/colors";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)<{ valid: string }>`
  background-image: ${({ valid }) =>
    valid === "true" ? GRADIENT_PRIMARY : "unset"};
  background-color: ${({ valid }) =>
    valid === "true" ? "unset" : GRAY_EAF0F5 + "!important"};
  border-radius: 8px !important;
  width: 100%;
`;

export const StyledFooter = styled.footer<{
  backgroundColor: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  bottom: 0;
  box-sizing: border-box;
  left: 0;
  padding-bottom: 40px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 0px;
  position: fixed;
  width: 100vw;
  z-index: 1;
`;
