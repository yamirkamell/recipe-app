import { HOME_CHANGE_INITIAL_STATE, InitialState, FormReducerAction } from './types.d';

const homeReducer = (state: InitialState, action: FormReducerAction) => {
  switch (action.type) {
    case HOME_CHANGE_INITIAL_STATE:
      return action.payload;

    default:
      return state;
  }
};

export default homeReducer;
