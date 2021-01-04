import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { IActivity } from "../models/activity.model";
import { ICoordinator, ICoordinatorResponse } from "../models/coordinator.model";
import { IEvent } from "../models/event.model";
import { IStore } from "../models/store.model";
import { ADD_OR_UPDATE_EVENT, DELETE_EVENT, IBaseAction, SET_ACTIVITIES, SET_COORDINATORS, SET_EVENTS, SET_SEARCH_QUERY } from "./actions";
import { serializeCoordinatorFullName } from "./selector-helpers";

export const initialState: IStore = {
    activeUserId: 0,
    events: new Map<number, IEvent>(),
    activities: new Map<string | number, IActivity>(),
    coordinators: new Map<number, ICoordinator>(),
    searchQuery: '',
    
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
            const activitiesWithDefault: IActivity[] = [{ id: 'unselected', name: 'Select Category' }, ...payload];
            const activitiesMap: Map<string | number, IActivity> = new Map(activitiesWithDefault.map((activity: IActivity) => [activity.id, activity]));
            return { ...state, activities: activitiesMap };
        }
        case SET_COORDINATORS: {
            const coordinatorsMap = new Map<number, ICoordinator>(payload.map((coordinator: ICoordinatorResponse) => [coordinator.id, serializeCoordinatorFullName(coordinator)]));
            return { ...state, coordinators: coordinatorsMap };
        }
        case SET_SEARCH_QUERY: {
            return { ...state, searchQuery: payload }
        }
        default: return state;
    }
}

export const store = createStore(reducer, applyMiddleware(thunk));