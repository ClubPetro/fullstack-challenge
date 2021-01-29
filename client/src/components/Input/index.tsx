import React, { InputHTMLAttributes, useCallback, FormEvent } from 'react';

import { dateMask } from '../../helpers/date.mask';

import { StyledInput } from './styles';

export const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ prefix, ...props }) => {

  const handleKeyUp = useCallback((event: FormEvent<HTMLInputElement>) => {
    dateMask(event);
  }, []);

  return (
    <StyledInput {...props} onKeyUp={handleKeyUp} />
  );
}
