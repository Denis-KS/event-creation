import { mockedActivitiesResponse, mockedCoordinatorsResponse, mockedEventsResponse } from "../__mocks__/fetches.mock";
import { activitiesUrl, coordinatorsUrl, eventsUrl } from "./urls";
import axios from 'axios';

export function fetchEvents() {
    return axios.get(eventsUrl).then(() => mockedEventsResponse);
};

export function fetchActivities() {
    return axios.get(activitiesUrl).then(() => mockedActivitiesResponse);
};

export function fetchCoordinators() {
    return axios.get(coordinatorsUrl).then(() => mockedCoordinatorsResponse);
};
