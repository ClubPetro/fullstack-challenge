import styled, { css } from 'styled-components';

interface StyledInputProps {
  inputType: 'date' | 'local';
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label``;

// = = = = = = = = = = = = = = = = = = = = = =
const InputDateStyle = css`
  height: 48px;
  padding: 0 10px;
`;

const InputLocalStyle = css`
  width: 503px;
  height: 48px;
  padding: 0 10px;
`;
// = = = = = = = = = = = = = = = = = = = = = =

export const StyledInput = styled.input<StyledInputProps>`
  ${props =>
    props.inputType === 'date' ? `${InputDateStyle}` : `${InputLocalStyle}`}
`;
