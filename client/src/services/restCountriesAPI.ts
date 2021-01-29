import axios from 'axios';

export const restCountriesAPI = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/all',
});
