import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TestUtil } from '../../../common/test/TestUtil';
import { Place } from '../place.entity';
import { PlaceService } from '../place.service';

describe('PlaceService', () => {
  let placeService: PlaceService;

  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlaceService,
        {
          provide: getRepositoryToken(Place),
          useValue: mockRepository,
        },
      ],
    }).compile();

    placeService = module.get<PlaceService>(PlaceService);
  });

  beforeEach(() => {
    mockRepository.find.mockReset();
    mockRepository.findOne.mockReset();
    mockRepository.save.mockReset();
    mockRepository.delete.mockReset();
  });

  it('should be defined', () => {
    expect(placeService).toBeDefined();
  });

  describe('When get all Places', () => {
    it('should be list all places', async () => {
      const place = TestUtil.giveMeAValidPlace();
      mockRepository.find.mockReturnValue([place, place]);
      const places = await placeService.findAllPlaces();

      expect(places).toHaveLength(2);
      expect(mockRepository.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('When get Place by id', () => {
    it('should find a existing place', async () => {
      const place = TestUtil.giveMeAValidPlace();
      mockRepository.findOne.mockReturnValue(place);
      const placeFound = await placeService.findPlaceById(1);

      expect(placeFound).toMatchObject({ country: place.country });
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
    });

    it('should return a exception when does not to find a Place', async () => {
      mockRepository.findOne.mockReturnValue(null);

      expect(placeService.findPlaceById(3)).rejects.toBeInstanceOf(
        NotFoundException,
      );
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
    });

    it('should return a exception when not sending a id', async () => {
      mockRepository.findOne.mockReturnValue(null);

      expect(placeService.findPlaceById(null)).rejects.toBeInstanceOf(
        BadRequestException,
      );
    });
  });

  describe('When create Place', () => {
    it('should create a place', async () => {
      const place = TestUtil.giveMeAValidPlace();
      mockRepository.save.mockReturnValue(place);
      const savedPlace = await placeService.createPlace(place);

      expect(savedPlace).toMatchObject(place);
      expect(mockRepository.save).toBeCalledTimes(1);
    });

    it('should return a exception when doesnt create a place', async () => {
      const place = TestUtil.giveMeAValidPlace();
      mockRepository.save.mockReturnValue(null);

      expect(placeService.createPlace(place)).rejects.toBeInstanceOf(
        InternalServerErrorException,
      );
      expect(mockRepository.save).toBeCalledTimes(1);
    });
  });

  describe('When update Place', () => {
    it('should update a place', async () => {
      const place = TestUtil.giveMeAValidPlace();
      const updatedPlace = { place: 'Updated place' };
      mockRepository.findOne.mockReturnValue(place);
      mockRepository.save.mockReturnValue({
        ...place,
        ...updatedPlace,
      });

      const savedPlace = await placeService.updatePlace(1, {
        ...place,
        place: 'Updated place',
      });

      expect(savedPlace).toMatchObject(updatedPlace);
      expect(mockRepository.findOne).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledTimes(1);
    });

    it('should return a exception when does not to find a user for update', async () => {
      const place = TestUtil.giveMeAValidPlace();
      const updatedPlace = { place: 'Updated place' };
      mockRepository.findOne.mockReturnValue(null);

      expect(
        placeService.updatePlace(3, {
          ...place,
          ...updatedPlace,
        }),
      ).rejects.toBeInstanceOf(NotFoundException);
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe('When delete Place', () => {
    it('should delete a existing place', async () => {
      const place = TestUtil.giveMeAValidPlace();
      mockRepository.findOne.mockReturnValue(place);
      mockRepository.delete.mockReturnValue(null);

      expect(await placeService.deletePlace(1)).toBeUndefined();
      expect(placeService.deletePlace(1)).rejects.toBeInstanceOf(
        NotFoundException,
      );
      expect(mockRepository.findOne).toHaveBeenCalledTimes(2);
    });

    it('should return a exception when does not to find a place to delete', async () => {
      mockRepository.findOne.mockReturnValue(null);

      expect(placeService.deletePlace(3)).rejects.toBeInstanceOf(
        NotFoundException,
      );
      expect(mockRepository.findOne).toHaveBeenCalledTimes(1);
    });
  });
});
