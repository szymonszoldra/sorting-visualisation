import styled from 'styled-components';

export const VisualisationContainer = styled.div`
  display: flex;
  width: 1200px;
  height: 85vh;
  margin: 0 50px;
  background-color: pink;
  align-items: flex-end;
  justify-content: space-between;
`;

export const SingleBar = styled.div`
  width: 36px;
  padding: 0 2px;
  background-color: royalblue;
  height: ${({ height }) => height + '%'};
  padding-top: 10px;
  text-align: center;
  font-size: 14px;
`;
