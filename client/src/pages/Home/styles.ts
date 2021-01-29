import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchArea = styled.section`
  width: 100%;
  min-width: 100%;
  height: 120px;
  background: var(--light-green);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 20px;
  color: var(--white);

  @media (max-width: 700px) {
    flex-direction: column;
    /* Burger Menu */
    display: none;
  }
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddNewCountryButton = styled.button`
  width: 203px;
  height: 49px;
  color: var(--white);
  background: var(--dark-green);
  margin-top: 17px;
`;

export const SelectCountry = styled.select`
  height: 48px;
  width: 303px;
  color: var(--grey);
  background: var(--white);
  padding: 0 10px;
`;

export const InputText = styled.input`
  height: 48px;
  width: 503px;
  padding: 0 10px;
`;

export const InputLabel = styled.label`

`;

export const CardsArea = styled.section`
  display: flex;
  gap: 10px;
  margin: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
