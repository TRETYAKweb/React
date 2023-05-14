import { compose } from 'redux';

declare global {
    interface IWindow {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
