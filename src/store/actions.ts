import { IActivity } from "../models/activity.model";
import { ICoordinator } from "../models/coordinator.model";
import { IEvent } from "../models/event.model";

export const ADD_OR_UPDATE_EVENT = 'ADD_OR_UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const SET_ACTIVITIES = 'SET_ACTIVITIES';
export const SET_COORDINATORS = 'SET_COORDINATORS';

export type Dispatch = (action: IBaseAction) => void;

export interface IBaseAction {
    type: string;
    payload: any;
};

interface IAddOrUpdateEvent extends IBaseAction {
    payload: IEvent;
}

interface IDeleteEventAction extends IBaseAction {
    payload: number;
}

interface ISetActivitiesAction extends IBaseAction {
    payload: IActivity[];
}

interface ISetCoordinatorsAction extends IBaseAction {
    payload: ICoordinator[];
}

export const addOrUpdateEventAction = (event: IEvent): IAddOrUpdateEvent => ({
    type: ADD_OR_UPDATE_EVENT,
    payload: event,
});

export const deleteEventAction = (eventId: number): IDeleteEventAction => ({
    type: DELETE_EVENT,
    payload: eventId,
});

export const setActivitiesAction = (activities: IActivity[]): ISetActivitiesAction => ({
    type: SET_ACTIVITIES,
    payload: activities,
});

export const setCoordinatorsAction = (coordinators: ICoordinator[]): ISetCoordinatorsAction => ({
    type: SET_COORDINATORS,
    payload: coordinators,
});

