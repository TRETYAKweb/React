import { makeAutoObservable } from 'mobx';

class CommentsFormStore {
    constructor() {
        this.postHash = null;
        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
    }

    setCurrentPostHash(hash) {
        this.postHash = hash;
    }
}

export { CommentsFormStore };
