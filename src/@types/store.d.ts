
type Item = { key: string, file: File };

interface AppStore {
    gun: import('gun/types').IGunInstance<any>;
    items?: Item[];
    secret?: string;
    timeout?: number;
    location?: string;
}


type AppActionType = "ADD_FILE" | "REMOVE_FILE" | "SET_SECRET" | "SET_TIMEOUT" | "SET_LOCATION";
type AppStorePayload = Item | number | string;
type AppAction = {
    type: AppActionType;
    payload: AppStorePayload;
};