import { serializeDateToView } from "helpers/serializeDateToView";
import { ICountry } from "interfaces/ICountry";

interface ICountryView {
  id: string;
  name: string;
  place_to_visit: string;
  date: string;
  flag: string;
}

export function countryView(country: ICountry): ICountryView {
  const data = {
    id: country.id,
    name: country.name,
    place_to_visit: country.place_to_visit,
    date: serializeDateToView(country.month, country.year),
    flag: country.flag,
  };

  return data;
}
