import { IPayloadAction } from '../../../types/redux';
import { commentsFormType } from '../types';

export const commentsFormActions = Object.freeze({
    setCurrentPostHash: (postHash: string): IPayloadAction<string> => {
        return {
            type:    commentsFormType.SET_CURRENT_POST_HASH,
            payload: postHash,
        };
    },
});
