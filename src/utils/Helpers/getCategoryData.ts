import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {ICON_DATA} from '../../constants/constants';

export const getCategoryInfo = (
  id: string,
): {CategoryIcon: any; categoryName?: string} => {
  const categoryArr = useSelector(
    (state: RootState) => state?.userProfile?.categories,
  );
  const selectedCategory = categoryArr.find(
    (item: {id: string}) => item?.id === id,
  );
  return {
    CategoryIcon: ICON_DATA[selectedCategory?.name!],
    categoryName: selectedCategory?.name,
  };
};
