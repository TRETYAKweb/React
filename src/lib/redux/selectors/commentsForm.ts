import { RootState } from '../init/store';

export const selectCurrentPostHash = (state:RootState): string => {
    return state.commentsForm.postHash;
};
