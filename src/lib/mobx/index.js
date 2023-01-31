import { makeAutoObservable } from 'mobx';
import { CommentsFormStore } from './CommentsFormStore';
import { AuthStore } from './AuthStore';
import { UiStore } from './UiStore';

export class RootStore {
    constructor() {
        makeAutoObservable(this);
        this.commentsFormStore = new CommentsFormStore(this);
        this.authStore = new AuthStore(this);
        this.uiStore = new UiStore(this);
    }
}
