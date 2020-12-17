import { mockedActivitiesResponse, mockedCoordinatorsResponse, mockedEventsResponse } from "../__mocks__/fetches.mock";
import { activitiesUrl, coordinatorsUrl, eventsUrl } from "./urls";

export function fetchEvents() {
    return fetch(eventsUrl).then(() => mockedEventsResponse);
};

export function fetchActivities() {
    return fetch(activitiesUrl).then(() => mockedActivitiesResponse);
};

export function fetchCoordinators() {
    return fetch(coordinatorsUrl).then(() => mockedCoordinatorsResponse);
};
