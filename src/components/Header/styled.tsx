import styled from "styled-components";
import { GRAY_F9FAFB } from "../../constants/colors";

export const Container = styled.div`
  background-color: ${GRAY_F9FAFB};
  position: fixed;
  box-sizing: border-box;
  width: 100vw;
  z-index: 10;
  display: flex;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100%;
  justify-content: center;
  padding-top: 8px;
`;

export const ContainerIcon = styled.div`
  padding-right: 18px;
  padding-top: 5px;
  position: fixed;
  right: 0;

  & .MuiIconButton-root {
    width: 20px;
    height: 20px;
  }
`;
