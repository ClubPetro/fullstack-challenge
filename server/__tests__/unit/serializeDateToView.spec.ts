import { serializeDateToView } from '../../src/helpers/serializeDateToView';

describe('serializeDateToView', () => {
  it('should return the date in format mm/yyyy', () => {
    const month = 22;
    const year = 2019;
    const expected = '22/2019';
    expect(serializeDateToView(month, year)).toEqual(expected);
  });

  it('should return the month by entering zero if it is less than 9', () => {
    const month = 2;
    const year = 2019;
    const expected = '02/2019';
    expect(serializeDateToView(month, year)).toEqual(expected);
  });
});
