import React, { useEffect, useState, FormEvent } from 'react';

import { Input } from '../../components/Input';
import { Card, ICard } from '../../components/Card';

import { serverAPI } from '../../services/serverAPI';
import { restCountriesAPI } from '../../services/restCountriesAPI';

import {
  Container,
  InputBlock,
  AddNewCountryButton,
  Form,
  SearchArea,
  SelectCountry,
  InputText,
  CardsArea,
} from './styles';

interface RestCountriesDataRequest {
  translations: {
    br: string;
  };
  flag: string;
}

export const Home: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [local, setLocal] = useState('');
  const [date, setDate] = useState('');

  const [countryNames, setCountryNames] = useState<string[]>([]);
  const [countryFlags, setCountryFlags] = useState<string[]>([]);

  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    async function loadData(): Promise<void> {
      const response = await restCountriesAPI.get<RestCountriesDataRequest[]>(
        '/',
      );
      const names = response.data.map(data => data.translations.br);
      const flags = response.data.map(data => data.flag);

      setCountryNames(names);
      setCountryFlags(flags);
    }

    loadData();
  }, []);

  useEffect(() => {
    async function loadCardsData(): Promise<void> {
      const response = await serverAPI.get('/country');
      setCards(response.data);
    }

    loadCardsData();
  }, [cards]);

  async function handleAddNewPlace(event: FormEvent): Promise<void> {
    event.preventDefault();

    const indexOfCountryFlag = countryNames.indexOf(selectedCountry);
    const countryFlag = countryFlags[indexOfCountryFlag];

    const data = {
      name: selectedCountry,
      place_to_visit: local,
      date,
      flag: countryFlag,
    };

    await serverAPI.post('/country', data);

    setLocal('');
    setDate('');
    window.location.reload();
  }

  return (
    <Container>
      <SearchArea>
        <Form onSubmit={handleAddNewPlace}>
          <InputBlock>
            <label>País</label>
            <SelectCountry
              name="countries"
              id="countries"
              onChange={event => {
                setSelectedCountry(event.target.value);
              }}
            >
              <option value="" disabled hidden>
                Selecione...
              </option>
              {countryNames.map(countryName => {
                return (
                  <option key={countryName} value={countryName}>
                    {countryName}
                  </option>
                );
              })}
            </SelectCountry>
          </InputBlock>

          <Input
            inputStyleType="local"
            type="text"
            label="Local"
            placeholder="Digite o local que deseja conhecer"
            value={local}
            onChange={event => setLocal(event.target.value)}
          />

          <Input
            inputStyleType="date"
            label="Meta"
            placeholder="mês/ano"
            value={date}
            onChange={event => setDate(event.target.value)}
          />

          <AddNewCountryButton type="submit">Adicionar</AddNewCountryButton>
        </Form>
      </SearchArea>

      <CardsArea>
        {cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            flag={card.flag}
            date={card.date}
            place_to_visit={card.place_to_visit}
          />
        ))}
      </CardsArea>
    </Container>
  );
};
