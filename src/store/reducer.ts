import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { IEvent } from "../models/event.model";
import { IStore } from "../models/store.model";
import { ADD_OR_UPDATE_EVENT, DELETE_EVENT, IBaseAction, SET_ACTIVITIES, SET_COORDINATORS, SET_EVENTS } from "./actions";

export const initialState: IStore = {
    activeUserId: 0,
    events: new Map<number, IEvent>(),
    activities: [],
    coordinators: [],
};

export const reducer = (state: IStore = initialState, { type, payload }: IBaseAction) => {
    switch (type) {
        case SET_EVENTS: {
            const events = new Map<number, IEvent>(payload.map((event: IEvent) => [event.id, event]));
            return { ...state, events };
        }
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

export const store = createStore(reducer, applyMiddleware(thunk));