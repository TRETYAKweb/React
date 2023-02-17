import { commentsFormType } from '../types';

const initialState = {
    postHash: '',
};

export const commentsFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case commentsFormType.SET_CURRENT_POST_HASH: {
            return {
                ...state,
                postHash: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
