import { HOME_CHANGE_INITIAL_STATE, InitialState } from './types.d';

const setInitialState = (payload: Array<InitialState>) => ({
    type: HOME_CHANGE_INITIAL_STATE,
    payload,
});


export {
    setInitialState,
};
