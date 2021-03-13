import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const selfSearchState = (state: RootState) => state.search;

export const selectSearchState = createSelector(
  selfSearchState,
  (state) => state,
);

export const selectSearchValue = createSelector(
  selfSearchState,
  (state) => state.searchValue,
);
