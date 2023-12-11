import React from 'react';
import { LuActivity } from 'react-icons/lu';

import * as S from './styles';

interface ButtonHexProps {
  textButton: string;
}

export const ButtonHex: React.FC<ButtonHexProps> = function ({ textButton }) {
  return (
    <S.HexagonalButton>
      <S.SecondButton>
        <LuActivity size={20} />
        <p>{textButton}</p>
      </S.SecondButton>
    </S.HexagonalButton>
  );
};
