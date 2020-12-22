import { mockedActivitiesResponse, mockedCoordinatorsResponse, mockedEventsResponse } from "../__mocks__/fetches.mock";
import { activitiesUrl, coordinatorsUrl, eventsUrl } from "./urls";
import axios from 'axios';
import { IEvent } from "../models/event.model";

export function fetchEvents() {
    return axios.get<IEvent[]>(eventsUrl).catch(() => Promise.resolve(mockedEventsResponse));
};

export function fetchActivities() {
    return axios.get(activitiesUrl).then(() => mockedActivitiesResponse);
};

export function fetchCoordinators() {
    return axios.get(coordinatorsUrl).then(() => mockedCoordinatorsResponse);
};
