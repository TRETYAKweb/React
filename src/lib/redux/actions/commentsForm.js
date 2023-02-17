import { commentsFormType } from '../types';

export const commentsFormActions = Object.freeze({
    setCurrentPostHash: (postHash) => {
        return {
            type:    commentsFormType.SET_CURRENT_POST_HASH,
            payload: postHash,
        };
    },
});
