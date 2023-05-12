import styled from "styled-components";
import { Button } from "@mui/material";
import {
  GRADIENT_PRIMARY,
  GRAY_565656,
  GRAY_CACACA,
  GRAY_E0E0E0,
  GRAY_F2F2F2,
} from "../../constants/colors";

export const Container = styled.div`
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 42px;
`;

export const StyledButton = styled(Button)<{ valid: string }>`
  background-image: ${({ valid }) =>
    valid === "true" ? GRADIENT_PRIMARY : "unset"};
  background-color: ${({ valid }) =>
    valid === "true" ? "unset" : GRAY_E0E0E0 + "!important"};
  border-radius: 50px !important;
  width: 100%;
`;
