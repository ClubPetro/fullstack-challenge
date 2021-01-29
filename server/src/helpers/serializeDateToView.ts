export function serializeDateToView(month: number, year: number): string {
  if (month <= 9) {
    return `0${month}/${year}`;
  }

  return `${month}/${year}`;
}
