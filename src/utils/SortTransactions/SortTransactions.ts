import {TRANSACTION} from '../../constants/types/Transaction';

export const sortTransactions = (
  arr: Array<TRANSACTION>,
): Array<TRANSACTION> => {
  return [...arr].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
};
