import React from 'react';

import * as S from './styles';

interface ButtonHexProps {
  textButton: string;
}

export const ButtonHex: React.FC<ButtonHexProps> = function ({ textButton }) {
  return (
    <S.HexagonalButton>
      <S.SecondButton>
        <p>{textButton}</p>
      </S.SecondButton>
    </S.HexagonalButton>
  );
};
