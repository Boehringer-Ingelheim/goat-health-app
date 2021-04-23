import { IonSearchbar } from '@ionic/react';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StringParam, useQueryParam } from 'use-query-params';
import { selectSearchValue } from '../../data/search/search.selector';
import { setSearchValue } from '../../data/search/search.slice';

export const SearchBar: FC = () => {
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useDispatch();

  const [query, setQuery] = useQueryParam('q', StringParam);

  useEffect(() => {
    if (searchValue.length === 0 && query) {
      dispatch(setSearchValue(query));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (searchValue.length === 0) {
      return setQuery(undefined);
    }
    if (searchValue !== query) {
      return setQuery(searchValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <IonSearchbar
      value={searchValue}
      onIonChange={(event) => dispatch(setSearchValue(event.detail.value!))}
    ></IonSearchbar>
  );
};
