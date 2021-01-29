import { serializeDateToSave } from '../../src/helpers/serializeDateToSave';

describe('serializeDateToSave', () => {
  it('should return the date separating month and year in numeric format', () => {
    const date = '22/2019';
    const expected = [22, 2019];
    expect(serializeDateToSave(date)).toEqual(expected);
  });
});
