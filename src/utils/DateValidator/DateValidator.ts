import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const isValidDate = (dateStr: string): boolean => {
  return dayjs(dateStr, 'DD/MM/YYYY', true).isValid();
};

export const getValidDate = (dateStr: string): Date => {
  return dayjs(dateStr, 'DD/MM/YYYY', true).toDate();
};
