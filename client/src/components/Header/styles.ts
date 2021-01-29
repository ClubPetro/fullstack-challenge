import styled from "styled-components";

export const Container = styled.header`
  background: var(--black);
  width: 100%;
  height: 82px;
  box-shadow: 0 5px 5px var(--grey);
  z-index: 999999999999;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }

  img {
    height: 70px;
    margin-left: 50px;
  }
`;
