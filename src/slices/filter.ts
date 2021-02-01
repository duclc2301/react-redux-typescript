import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export type Filter = keyof typeof Filters;

type State = typeof Filters.SHOW_ALL;
type FilterAction = { filter: Filter };

const initialState: State = Filters.SHOW_ALL;

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<FilterAction>) {
      const { filter } = action.payload;
      state = filter;
      return state;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
