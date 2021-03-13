import { IonSearchbar } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchValue } from '../../data/search/search.selector';
import { setSearchValue } from '../../data/search/search.slice';

export const SearchBar = () => {
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useDispatch();

  return (
    <IonSearchbar
      value={searchValue}
      onIonChange={(event) => dispatch(setSearchValue(event.detail.value!))}
    ></IonSearchbar>
  );
};
