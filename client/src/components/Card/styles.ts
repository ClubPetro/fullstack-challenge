import styled from 'styled-components';

import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  min-width: 250px;
  height: 250px;
  border-radius: 10px;
  padding: 20px 10px;
  box-shadow: 2px 5px 4px var(--grey);
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--grey);
  margin-bottom: 10px;
`;

export const FlagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0 5px;
`;

export const Flag = styled.img`
  width: 56px;
  height: 34px;
`;

export const CountryTitle = styled.h2`
  text-transform: uppercase;
  font-size: 1.6rem;
  color: var(--light-green);
  margin-bottom: 10px;
`;

export const ButtonsContainer = styled.div`
  padding: 0 5px;
  display: flex;
  gap: 15px;
`;

export const Body = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  h5 {
    margin-left: 20px;
    color: var(--black);
    font-weight: 300;
    font-size: 1.6rem;
  }

  h5 + h5 {
    margin-top: 5px;
  }
`;
