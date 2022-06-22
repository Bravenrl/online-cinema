export const getGenresItem = (
    index: number,
    length: number,
    name: string
) => index+1 === length ? name : name + ', '