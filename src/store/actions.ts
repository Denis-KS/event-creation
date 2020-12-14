export const ADD_OR_UPDATE_EVENT = 'ADD_OR_UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const SET_ACTIVITIES = 'SET_ACTIVITIES';
export const SET_COORDINATORS = 'SET_COORDINATORS';

export interface IBaseAction {
    type: string;
    payload: any;
};