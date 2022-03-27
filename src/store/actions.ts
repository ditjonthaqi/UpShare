export function addItem(payload: Item): AppAction {
    return {
        payload,
        type: "ADD_FILE"
    }
}

export function removeitem(payload: string): AppAction {
    return {
        payload,
        type: "REMOVE_FILE"
    }
}

export function setSecret(payload: string): AppAction {
    return {
        payload,
        type: "SET_SECRET"
    }
}

export function setLocation(payload: string): AppAction {
    return {
        payload,
        type: "SET_LOCATION"
    }
}