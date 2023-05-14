// Core
import { createStore, applyMiddleware } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from '../saga/index';

// Instruments
import { rootReducer } from './rootReducer';


const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type Action = { type: string; payload: unknown; error?: boolean };
export type AppSaga<ReturnType = void> = () => IterableIterator<ReturnType>;
