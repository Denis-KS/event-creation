import { IStore } from "../models/store.model";
import { ADD_EVENT, IBaseAction } from "./actions";

export const reducer = (state: IStore, { type, payload }: IBaseAction) => {
    switch (type) {
        case ADD_EVENT: {
            const events = state.events;
            events.set(payload.id, payload);

            return { ...state, events };
        }
        default: return state;
    }
}