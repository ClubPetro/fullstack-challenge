import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  max-width: 550px;

  @media (min-width: 600px) {
    top: 24px;
    left: auto;
    right: 24px;
  }

  .MuiSnackbar-root {
    position: unset;

    & + .MuiSnackbar-root {
      margin-top: 8px;
    }
  }
`;
