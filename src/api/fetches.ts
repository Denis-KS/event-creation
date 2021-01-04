import { mockedActivitiesResponse, mockedCoordinatorsResponse, mockedEventsResponse } from "../__mocks__/fetches.mock";
import { activitiesUrl, coordinatorsUrl, eventsUrl } from "./urls";
import axios from 'axios';
import { IEvent } from "../models/event.model";
import { IActivity } from "../models/activity.model";
import { ICoordinatorResponse } from "../models/coordinator.model";

export function fetchEvents() {
    return axios.get<IEvent[]>(eventsUrl).catch(() => Promise.resolve(mockedEventsResponse));
};

export function fetchActivities() {
    return axios.get<IActivity>(activitiesUrl).catch(() => Promise.resolve(mockedActivitiesResponse));
};

export function fetchCoordinators() {
    return axios.get<ICoordinatorResponse>(coordinatorsUrl).catch(() => Promise.resolve(mockedCoordinatorsResponse));
};
