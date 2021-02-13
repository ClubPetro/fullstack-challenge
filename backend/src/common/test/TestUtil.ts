import { Place } from '../../modules/place/place.entity';

export class TestUtil {
  static giveMeAValidPlace(): Place {
    const place = new Place();
    place.country = 'Valid Country';
    place.place = 'Valid place';
    place.goal = 1641009600; // 2022-01-01T00:00:00
    place.flag = 'https://www.valid.com/flag.svg';
    return place;
  }
}
