import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { ICountryController } from '../interfaces/ICountryController';
import { AppError } from '../errors/AppError';
import { Country } from '../models/Country';
import { serializeDateToSave } from '../helpers/serializeDateToSave';
import { countryView } from '../views/country.view';

export class CountryController implements ICountryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, place_to_visit, date, flag } = request.body;

    const countryRepository = getRepository(Country);

    // Não permitir adicionar um mesmo local para visitar no mesmo país

    const [month, year] = serializeDateToSave(date);

    const data = {
      name,
      place_to_visit,
      month,
      year,
      flag,
    };

    const newCountry = countryRepository.create(data);

    await countryRepository.save(newCountry);

    return response.status(201).json(newCountry);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    // Ordenar os dados que estão no banco de dados antes de retornar;
    const countryRepository = getRepository(Country);
    const countries = await countryRepository.find();
    const serializedCountries = countries.map(country => countryView(country));
    return response.json(serializedCountries);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { place_to_visit, date } = request.body;

    const [month, year] = serializeDateToSave(date);

    const countryRepository = getRepository(Country);
    const country = await countryRepository.findOne(id);

    if (!country) {
      throw new AppError('País não encontrado!', 401);
    }

    country.place_to_visit = place_to_visit;
    country.month = month;
    country.year = year;

    await countryRepository.save(country);

    return response.json(country);
  }

  public async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const countryRepository = getRepository(Country);
    await countryRepository.delete(id);
    response.status(204).send();
  }
}
