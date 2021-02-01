import styled, { css } from 'styled-components';

interface Modal {
  closeModal: boolean;
}

export const Container = styled.div<Modal>`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  ${props =>
    props.closeModal
      ? css`
          opacity: 0;
          visibility: hidden;
        `
      : css`
          opacity: 1;
          visibility: visible;
        `}

  section {
    background: #f0f2f5;
    padding: 2.4rem;
    width: 90%;
    max-width: 500px;
    position: relative;
    z-index: 1;
  }
`;

export const ModalForm = styled.form``;
