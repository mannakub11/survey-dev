import styled from "styled-components";
import { BLUE_00A6E6 } from "../../constants/colors";

export const Container = styled.div`
  & .MuiDivider-root {
    border-color: rgba(90, 110, 123, 0.1);
    border-width: 1px;
  }

  & .MuiPaper-root {
    padding: 16px;
  }

  & .MuiFormControlLabel-label {
    font-family: KrungthaiFast-Regular;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: black;
  }

  & .MuiFormControlLabel-root {
    margin-left: 0px;
    margin-right: 32px;
  }

  & .MuiFormControl-root {
    padding-top: 16px;
  }

  & .MuiRadio-root {
    padding: 0px;
    padding-right: 16px;
  }

  & .MuiTypography-body1 {
    padding-top: 2px;
  }
  & .MuiSvgIcon-root {
    fill: ${BLUE_00A6E6};
  }

  &:last-child {
    margin-bottom: 114px;
  }
`;
