import React, { useCallback, useState } from 'react';

import { serverAPI } from '../../services/serverAPI';

import { EditCardModal } from './EditCardModal';
import { IconDelete, IconEdit } from '../../styles/Icons';

import {
  Container,
  Header,
  FlagContainer,
  Flag,
  CountryTitle,
  ButtonsContainer,
  Body,
} from './styles';

export interface ICard {
  id: string;
  name: string;
  place_to_visit: string;
  date: string;
  flag: string;
}

export const Card: React.FC<ICard> = ({
  id,
  name,
  place_to_visit,
  date,
  flag,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  // const handleEditCard = useCallback(async (cardId: string) => {
  //   console.log('');
  // });

  const handleRemove = useCallback(async (cardId: string) => {
    await serverAPI.delete(`country/${cardId}`);
    window.location.reload();
  }, []);

  return (
    <>
      <Container>
        <Header>
          <FlagContainer>
            <Flag src={flag} />
            <CountryTitle>{name}</CountryTitle>
          </FlagContainer>
          <ButtonsContainer>
            <IconEdit
              style={{ fontSize: 20 }}
              onClick={() => setIsOpenModal(!isOpenModal)}
            />
            <IconDelete
              style={{ fontSize: 23 }}
              onClick={() => handleRemove(id)}
            />
          </ButtonsContainer>
        </Header>
        <Body>
          <h5>Local: {place_to_visit}</h5>
          <h5>Meta: {date}</h5>
        </Body>
      </Container>

      {isOpenModal && <EditCardModal />}
    </>
  );
};
