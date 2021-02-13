import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { TestUtil } from '../src/common/test/TestUtil';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Place } from '../src/modules/place/place.entity';
import { PlaceRepository } from '../src/modules/place/place.repository';

describe('PlaceController (e2e)', () => {
  let app: INestApplication;
  let repository: PlaceRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [
        {
          provide: getRepositoryToken(Place),
          useClass: PlaceRepository,
        },
      ],
    }).compile();

    app = module.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    repository = module.get(getRepositoryToken(Place));
    await app.init();
    await repository.delete({});
  });

  afterEach(async () => {
    await app.close();
  });

  describe('When get all Places', () => {
    it('Should list all the places', async () => {
      const place: Place = TestUtil.giveMeAValidPlace();
      await repository.save(place);

      const result = await request(app.getHttpServer())
        .get('/places/')
        .expect(200);

      expect(result.body).toEqual([
        {
          ...place,
          createdAt: place.createdAt.toISOString(),
          updatedAt: place.updatedAt.toISOString(),
        },
      ]);
    });
  });

  describe('When get Place by id', () => {
    it('Should get a place', async () => {
      const place: Place = TestUtil.giveMeAValidPlace();
      await repository.save(place);

      await request(app.getHttpServer()).get(`/places/${place.id}`).expect(200);
    });

    it('Should return a Not Found error when does not to find a Place', async () => {
      await request(app.getHttpServer()).get('/places/9999').expect(404);
    });

    it('Should return a Bad Request error when not sending a numeric id', async () => {
      await request(app.getHttpServer()).get('/places/xyz').expect(400);
    });
  });

  describe('When create Place', () => {
    it('Should create a Place', async () => {
      const place: Place = TestUtil.giveMeAValidPlace();

      const result = await request(app.getHttpServer())
        .post('/places/')
        .send(place)
        .expect(201);

      expect({
        country: result.body.country,
        place: result.body.place,
      }).toEqual({
        country: place.country,
        place: place.place,
      });
    });

    it('Should return a Bad Request error when send a invalid place', async () => {
      const place = {
        country: null,
        place: null,
        goal: -1,
        flag: null,
      };

      await request(app.getHttpServer())
        .post('/places/')
        .send(place)
        .expect(400);
    });
  });

  describe('When update Place', () => {
    it('should update a Place', async () => {
      const place: Place = TestUtil.giveMeAValidPlace();
      await repository.save(place);

      const result = await request(app.getHttpServer())
        .patch(`/places/${place.id}`)
        .send({
          country: 'Not edit country',
          place: 'Salvador',
          goal: 1562010600,
          flag: 'Not edit flag',
        })
        .expect(200);

      expect({
        country: result.body.country,
        place: result.body.place,
        goal: result.body.goal,
        flag: result.body.flag,
      }).toEqual({
        country: place.country,
        place: 'Salvador',
        goal: 1562010600,
        flag: place.flag,
      });
    });

    it('Should return a Not Found error when does not to find a Place to update', async () => {
      await request(app.getHttpServer())
        .patch('/places/9999')
        .send({
          place: 'Salvador',
          goal: 1562010600,
        })
        .expect(404);
    });

    it('Should return a Bad Request error when not sending a numeric id', async () => {
      await request(app.getHttpServer()).patch('/places/xyz').expect(400);
    });
  });

  describe('When delete Place', () => {
    it('Should delete a existing Place', async () => {
      const place: Place = TestUtil.giveMeAValidPlace();
      await repository.save(place);

      await request(app.getHttpServer())
        .delete(`/places/${place.id}`)
        .expect(200);
    });

    it('Should return a Not Found error when does not to find a Place to delete', async () => {
      await request(app.getHttpServer()).delete('/places/9999').expect(404);
    });

    it('Should return a Bad Request error when not sending a numeric id', async () => {
      await request(app.getHttpServer()).patch('/places/xyz').expect(400);
    });
  });
});
