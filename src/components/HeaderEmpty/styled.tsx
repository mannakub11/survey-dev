import styled from "styled-components";
import { GRAY_F9FAFB } from "../../constants/colors";

export const Container = styled.div`
  background-color: ${GRAY_F9FAFB};
  position: fixed;
  box-sizing: border-box;
  width: 100vw;
  z-index: 10;
  display: flex;
  height: 46px;
`;
