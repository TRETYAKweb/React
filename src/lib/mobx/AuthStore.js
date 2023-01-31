import { makeAutoObservable } from 'mobx';

class AuthStore {
    constructor() {
        this.authToken = null;

        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
    }

    setToken(newToken) {
        this.authToken = newToken;
    }
}

export { AuthStore };
