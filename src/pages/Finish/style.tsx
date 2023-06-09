import styled from "styled-components";
import { GRAY_F9FAFB } from "../../constants/colors";

export const Container = styled.div`
  background-color: ${GRAY_F9FAFB};
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  width: 100vw;

  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
`;
