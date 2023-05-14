import { RootState } from '../init/store';

export const selectErrorMessage = (state:RootState):string => {
    return state.error.errorMessage;
};
