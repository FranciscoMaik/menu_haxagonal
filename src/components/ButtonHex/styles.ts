import styled from 'styled-components';

export const HexagonalButton = styled.div`
  width: 100px;
  height: 55px;
  background-color: #808080;
  position: relative;
  cursor: pointer;

  ::before {
    content: '';
    position: absolute;
    top: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 25px solid #808080;
  }

  ::after {
    content: '';
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 25px solid #808080;
  }
`;

export const SecondButton = styled(HexagonalButton)`
  background-color: #ffffff;
  width: 98px;
  margin-left: 1px;

  transition: all 500ms;

  ::before {
    content: '';
    position: absolute;
    top: -24px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 49px solid transparent;
    border-right: 49px solid transparent;
    border-bottom: 24px solid #ffffff;
    transition: all 500ms;
  }

  ::after {
    content: '';
    position: absolute;
    bottom: -24px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 49px solid transparent;
    border-right: 49px solid transparent;
    border-top: 24px solid #ffffff;
    z-index: 2;
    transition: all 500ms;
  }

  :hover {
    background-color: #e7daff;

    ::after {
      border-top: 24px solid #e7daff;
    }

    ::before {
      border-bottom: 24px solid #e7daff;
    }
  }
`;
