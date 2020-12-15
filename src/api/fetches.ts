import { IActivity } from "../models/activity.model";
import { ICoordinator } from "../models/coordinator.model";
import { mockedActivitiesResponse, mockedCoordinatorsResponse } from "../__mocks__/fetches.mock";
import { activitiesUrl, coordinatorsUrl } from "./urls";

export function fetchActivities() {
    return fetch(activitiesUrl).then(() => mockedActivitiesResponse);
};

export function fetchCoordinators() {
    return fetch(coordinatorsUrl).then(() => mockedCoordinatorsResponse);
};
