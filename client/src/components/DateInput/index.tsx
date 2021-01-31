import React, { InputHTMLAttributes, useCallback, FormEvent } from 'react';

import { StyledInput } from './styles';

type DateInputProps = InputHTMLAttributes<HTMLInputElement>;

export const DateInput: React.FC<DateInputProps> = ({ ...props }) => {
  const handleKeyUp = useCallback((event: FormEvent<HTMLInputElement>) => {
    event.currentTarget.maxLength = 7;
    let { value } = event.currentTarget;

    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/, '$1/$2');

    event.currentTarget.value = value;
  }, []);

  return <StyledInput {...props} onKeyUp={handleKeyUp} />;
};
