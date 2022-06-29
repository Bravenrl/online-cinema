export const getGenresItem = (index: number, length: number, name: string) =>
  index + 1 === length ? name : name + ', ';

export const getGenresList = (arr: { name: string }[]): string =>
  arr.map((el) => el.name).join(', ');
