import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';

import { Place } from './place.entity';
import { PlaceRepository } from './place.repository';

import { CreatePlaceDto, ReadPlaceDto, UpdatePlaceDto } from './dtos';
import { Not } from 'typeorm';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(PlaceRepository)
    private readonly _placeRepository: PlaceRepository,
  ) {}

  async findAllPlaces(): Promise<ReadPlaceDto[]> {
    const places: Place[] = await this._placeRepository.find({
      order: { goal: 'ASC' },
    });

    return places.map((place: Place) => plainToClass(ReadPlaceDto, place));
  }

  async findPlaceById(id: number): Promise<ReadPlaceDto> {
    if (!id) {
      throw new BadRequestException('O ID deve ser enviado!');
    }

    const place: Place = await this._placeRepository.findOne(id);

    if (!place) {
      throw new NotFoundException('Lugar não encontrado!');
    }

    return plainToClass(ReadPlaceDto, place);
  }

  async createPlace(place: CreatePlaceDto): Promise<ReadPlaceDto> {
    await this.validateIfExistsCountryAndPlace(place.country, place.place);

    const savedPlace: Place = await this._placeRepository.save(place);

    if (!savedPlace) {
      throw new InternalServerErrorException(
        'Houve um erro ao criar o lugar. Tente novamente!',
      );
    }

    return plainToClass(ReadPlaceDto, savedPlace);
  }

  async updatePlace(id: number, place: UpdatePlaceDto): Promise<ReadPlaceDto> {
    const foundPlace: Place = await this._placeRepository.findOne(id);

    await this.validateIfExistsCountryAndPlace(
      foundPlace.country,
      place.place,
      id,
    );

    if (!foundPlace) {
      throw new NotFoundException('Lugar não encontrado!');
    }

    foundPlace.place = place.place;
    foundPlace.goal = place.goal;

    const updatedPlace: Place = await this._placeRepository.save(foundPlace);

    return plainToClass(ReadPlaceDto, updatedPlace);
  }

  async deletePlace(id: number): Promise<void> {
    const placeExists = await this._placeRepository.findOne(id);

    if (!placeExists) {
      return;
    }

    await this._placeRepository.delete(id);
  }

  private async validateIfExistsCountryAndPlace(
    country: string,
    place: string,
    id?: number,
  ) {
    let exists: Place;
    if (id) {
      exists = await this._placeRepository.findOne({
        where: {
          country,
          place,
          id: Not(id),
        },
      });
    } else {
      exists = await this._placeRepository.findOne({
        where: {
          country,
          place,
        },
      });
    }

    if (exists) {
      throw new BadRequestException(
        `O local "${place}" já está registrado para o país "${country}"`,
      );
    }
  }
}
