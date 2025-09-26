import moment from 'moment';
import {TRANSACTION} from '../../constants/types/Transaction';

export const formatTransactions = (
  transactions: TRANSACTION[],
  typeFilter?: string | string[],
) => {
  let filteredTransaction = transactions;
  if (!!typeFilter) {
    filteredTransaction = filteredTransaction.filter(item => {
      if (typeof typeFilter === 'string') {
        return item?.transactionType === typeFilter;
      } else if (Array.isArray(typeFilter)) {
        return typeFilter.includes(item?.transactionType);
      }
    });
  }

  const groups: any = {};

  filteredTransaction.forEach(tx => {
    const monthYear = moment(tx.createdAt).format('MMM YYYY').toString(); // e.g. FEB 2025
    if (!groups[monthYear]) {
      groups[monthYear] = [];
    }
    groups[monthYear].push(tx);
  });

  // Convert object → array for SectionList
  return Object.keys(groups).map(month => ({
    title: month,
    data: groups[month],
  }));
};
