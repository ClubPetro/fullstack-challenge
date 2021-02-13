import { IconButton } from '@material-ui/core';
import React from 'react';
import { MdEdit, MdClose } from 'react-icons/md';

import { Container } from './styles';

interface Place {
  id: number;
  country: string;
  place: string;
  goal: number;
  goalFormatted: string;
  flag: string;
}
interface CardProps {
  place: Place;
  handleDelete: (id: number) => void;
  handleEdit: (place: Place) => void;
}

const Card: React.FC<CardProps> = ({ place, handleDelete, handleEdit }) => {
  return (
    <Container>
      <div className="header">
        <img src={place.flag} alt={place.country} />
        <div className="action">
          <IconButton onClick={() => handleEdit(place)}>
            <MdEdit />
          </IconButton>
          <IconButton onClick={() => handleDelete(place.id)}>
            <MdClose />
          </IconButton>
        </div>
      </div>
      <div className="country-name">{place.country.toUpperCase()}</div>
      <div className="place-goal">
        <div>{`Local: ${place.place}`}</div>
        <div>{`Meta: ${place.goalFormatted}`}</div>
      </div>
    </Container>
  );
};

export default Card;
