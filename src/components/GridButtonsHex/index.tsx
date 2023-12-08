import React from 'react';
import { ButtonHex } from '..';

import * as S from './styles';

const arrayDeObjetos1 = [
  { id: '1', textButton: 'Botão 1' },
  { id: '2', textButton: 'Botão 2' },
  { id: '3', textButton: 'Botão 3' },
  { id: '4', textButton: 'Botão 4' },
  { id: '5', textButton: 'Botão 5' },
  { id: '6', textButton: 'Botão 6' },
];

const arrayDeObjetos2 = [
  { id: '1', textButton: 'Botão 1' },
  { id: '2', textButton: 'Botão 2' },
  { id: '3', textButton: 'Botão 3' },
  { id: '4', textButton: 'Botão 4' },
  { id: '5', textButton: 'Botão 5' },
];

export const GridButtonsHex: React.FC = function () {
  return (
    <S.Container>
      <div>
        {arrayDeObjetos1.map(button => (
          <ButtonHex key={button.id} textButton={button.textButton} />
        ))}
      </div>
      <div>
        {arrayDeObjetos2.map(button => (
          <ButtonHex key={button.id} textButton={button.textButton} />
        ))}
      </div>
      <div>
        {arrayDeObjetos1.map(button => (
          <ButtonHex key={button.id} textButton={button.textButton} />
        ))}
      </div>
      <div>
        {arrayDeObjetos2.map(button => (
          <ButtonHex key={button.id} textButton={button.textButton} />
        ))}
      </div>
    </S.Container>
  );
};
