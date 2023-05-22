import styled from "styled-components";
import { GRAY_F9FAFB } from "../../constants/colors";

export const Container = styled.div`
  background-color: ${GRAY_F9FAFB};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  width: 100vw;
  margin-top: 38px;
`;
