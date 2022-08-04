import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const convertMongoDate = (date: string): string =>
  new Date(date).toLocaleDateString('ru');

export const formatVideoTime = (time: number): string =>
  dayjs.duration(Math.floor(time), 's').format('mm:ss');
