import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  margin-top: 46px;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
`;

export const StyledLayoutText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ContainerImage = styled.div`
  border-radius: 16px;
  padding-top: 24px;
  height: auto;
  margin-bottom: 98px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 457px;
  border-radius: 16px;
`;
