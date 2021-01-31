import type { TodoFilterAction } from 'actions';
import { Filters, SET_FILTER } from 'actions/constants';

type State = typeof Filters.SHOW_ALL;
type Action = TodoFilterAction;

const initialState: State = Filters.SHOW_ALL;

const filterReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
