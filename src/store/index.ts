import { reducer } from "./reducer"
import { AppState, Observer } from "../types/store";
import Storage from "../utils/storage";

const initialState: AppState = {
    screen: 'DASHBOARD',
    cart: [],
    products: [],
};

export let appState = Storage.get('STORE', initialState);


const persistStore = (state: any) => {

    Storage.set('STORE', state);
};

let observers: any[] = []

export const dispatch = (action: any) => {
    const clone = JSON.parse(JSON.stringify(appState))
    const newState = reducer(action, clone);
    appState = newState;
    observers.forEach((o) => o.render())
    persistStore(newState);
}


export const addObserver = (ref: any) => {
    observers = [...observers, ref]
}