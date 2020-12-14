import { IStore } from "../models/store.model";
import { ADD_OR_UPDATE_EVENT, DELETE_EVENT, IBaseAction, SET_ACTIVITIES, SET_COORDINATORS } from "./actions";

export const reducer = (state: IStore, { type, payload }: IBaseAction) => {
    switch (type) {
        case ADD_OR_UPDATE_EVENT: {
            const events = state.events;
            events.set(payload.id, payload);

            return { ...state, events };
        }
        case DELETE_EVENT: {
            const events = state.events;
            events.delete(payload);

            return { ...state, events };
        }
        case SET_ACTIVITIES: {
            return { ...state, activities: payload };
        }
        case SET_COORDINATORS: {
            return { ...state, coordinators: payload };
        }
        default: return state;
    }
}