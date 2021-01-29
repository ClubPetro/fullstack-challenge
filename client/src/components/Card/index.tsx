import React from 'react';

import { api } from '../../services/api';

import {
  Container,
  Header,
  FlagContainer,
  Flag,
  CountryTitle,
  ButtonsContainer,
  IconEdit,
  IconDelete,
  Body,
} from './styles';

export interface ICard {
  id: string;
  name: string;
  place_to_visit: string;
  date: string;
  flag: string;
}

export const Card: React.FC<ICard> = ({ id, name, place_to_visit, date, flag }) => {

  // async function handleEdit() {

  // }

  async function handleRemove(id: string) {
    await api.delete(`country/${id}`);
    window.location.reload();
  }

  return (
    <Container>
      <Header>
        <FlagContainer>
          <Flag src={flag} />
          <CountryTitle>{name}</CountryTitle>
        </FlagContainer>
        <ButtonsContainer>
          <IconEdit
            style={{fontSize: 20}}
            onClick={() => {}}
          />
          <IconDelete
            style={{fontSize: 23}}
            onClick={() => handleRemove(id)}
          />
        </ButtonsContainer>
      </Header>
      <Body>
        <h5>Local: {place_to_visit}</h5>
        <h5>Meta: {date}</h5>
      </Body>
    </Container>
  );
}
