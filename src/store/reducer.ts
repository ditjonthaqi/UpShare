import { Reducer } from "redux"
import Gun from 'gun';
import "https://cdn.jsdelivr.net/npm/gun/lib/radix.js";
import "https://cdn.jsdelivr.net/npm/gun/lib/radisk.js"
import "https://cdn.jsdelivr.net/npm/gun/lib/store.js";
import "https://cdn.jsdelivr.net/npm/gun/lib/rindexed.js"
const initStore = { gun: Gun({ localStorage: false, peers: ['https://upshare-relay-server.herokuapp.com/gun'] }), items: [] } as AppStore
const reducer: Reducer<AppStore, AppAction> = (store = initStore, action) => {
    if (action.type === "ADD_FILE") {
        const item = action.payload as Item;
        const items = [...store.items!, item];
        return { ...store, items: items }
    } else if (action.type === "REMOVE_FILE") {
        const key = action.payload as string;
        const items = store.items?.filter(item => item.key !== key);
        return { ...store, items }
    } else if (action.type === 'SET_SECRET') {
        const secret = action.payload as string;
        return { ...store, secret }
    } else if (action.type === 'SET_TIMEOUT') {
        const timeout = action.payload as number;
        return { ...store, timeout }
    } else if (action.type === 'SET_LOCATION') {
        const location = action.payload as string;
        return { ...store, location }
    }
    return store;
}


export { reducer }