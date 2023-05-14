import { RootState } from '../init/store';

export const selectToken = (state: RootState): string => {
    return state.auth.token;
};
