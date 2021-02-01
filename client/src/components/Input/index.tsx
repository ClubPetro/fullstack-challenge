import React, { FormEvent, InputHTMLAttributes, useCallback } from 'react';

import { InputContainer, InputLabel, StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputStyleType: 'date' | 'local';
}

export const Input: React.FC<InputProps> = ({
  label,
  inputStyleType,
  ...props
}) => {
  const handleKeyUp = useCallback((event: FormEvent<HTMLInputElement>) => {
    event.currentTarget.maxLength = 7;
    let { value } = event.currentTarget;

    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/, '$1/$2');

    event.currentTarget.value = value;
  }, []);

  return (
    <InputContainer>
      <InputLabel htmlFor={inputStyleType}>{label}</InputLabel>
      <StyledInput
        id={inputStyleType}
        name={inputStyleType}
        inputType={inputStyleType}
        onKeyUp={inputStyleType === 'date' ? handleKeyUp : undefined}
        {...props}
      />
    </InputContainer>
  );
};
