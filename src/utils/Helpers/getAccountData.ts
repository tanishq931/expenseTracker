import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {ACCOUNTS_ICON} from '../../constants/constants';

export const getAccountInfo = (id: string): {AccountIcon: any; accountName?: string} => {
  const accountsArr = useSelector(
    (state: RootState) => state?.userProfile?.userAccounts,
  );
  const selectedAccount = accountsArr.find(
    (item: {id: string}) => item?.id === id,
  );
  return {
    AccountIcon: ACCOUNTS_ICON[selectedAccount?.icon!],
    accountName: selectedAccount?.name,
  };
};
