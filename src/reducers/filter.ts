import type { PayloadAction } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import type { Filter } from 'actions';
import { setFilter } from 'actions';
import { Filters } from 'actions/constants';

type State = typeof Filters.SHOW_ALL;

const initialState: State = Filters.SHOW_ALL;

type FilterAction = { filter: Filter };

const filterReducer = createReducer(initialState, {
  [setFilter.type]: (state, action: PayloadAction<FilterAction>) => {
    const { filter } = action.payload;
    state = filter;
    return state;
  },
});

export default filterReducer;
