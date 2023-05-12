import styled from "styled-components";
import { GRADIENT_PRIMARY, GRAY_F2F2F2 } from "../../constants/colors";
import { Button } from "@mui/material";

export const Container = styled.div`
  background-color: ${GRAY_F2F2F2};
  height: 100vh;
`;
export const ContainerNotFound = styled.div`
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  width: 100vw;
  transform: translate(-50%, -50%);
`;

export const StyledLayoutText = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const StyledButton = styled(Button)`
  background-image: ${GRADIENT_PRIMARY};

  border-radius: 50px !important;
  width: 100%;
`;
