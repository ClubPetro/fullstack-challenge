import { EntityRepository, Repository } from 'typeorm';
import { Place } from './place.entity';

@EntityRepository(Place)
export class PlaceRepository extends Repository<Place> {}
