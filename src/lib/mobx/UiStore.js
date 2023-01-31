import { makeAutoObservable } from 'mobx';


class UiStore {
    constructor() {
        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });

        this.errorMessage = null;
    }

    resetError() {
        this.errorMessage = '';
    }

    setErrorMessage(value) {
        this.errorMessage = value;
    }
}

export { UiStore };
