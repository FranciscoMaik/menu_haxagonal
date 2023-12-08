import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > div {
    gap: 1px;
    display: flex;
    height: 82px;
  }
`;
