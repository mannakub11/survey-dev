import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: white;
  border-radius: 16px 16px 0px 0px;
  flex-direction: column;
  margin-top: 24px;
  height: 100%;
  overflow: auto;
`;

export const ContainerCard = styled.div`
  height: auto;
  padding-top: 8px;
`;

export const ContainerBackground = styled.div`
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
`;
