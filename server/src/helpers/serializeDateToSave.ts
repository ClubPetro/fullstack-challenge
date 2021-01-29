export function serializeDateToSave(date: string): number[] {
  const [month, year] = date.split('/');
  return [Number(month), Number(year)];
}
