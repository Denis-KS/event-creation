import { IActivity } from "../models/activity.model";
import { ICoordinator } from "../models/coordinator.model";
import { activitiesUrl, coordinatorsUrl } from "./urls";

export const mockedActivitiesResponse: IActivity[] = [
  { "id": 0, "name": "Cycling" },
  { "id": 1, "name": "Hiking" },
  { "id": 2, "name": "Cooking" },
  { "id": 3, "name": "Rock climbing" },
  { "id": 4, "name": "Yoga" },
  { "id": 5, "name": "Fencing" },
  { "id": 6, "name": "Swimming" },
  { "id": 7, "name": "Badminton" },
  { "id": 8, "name": "Running" },
  { "id": 9, "name": "Dance" }
];

export const mockedCoordinatorsResponse: ICoordinator[] = [
  { "id": 0, "name": "Daniel", "lastname": "Mitchell", "email": "daniel.mitchell@hussa.rs" },
  { "id": 1, "name": "Albert", "lastname": "Alexander", "email": "albert.alexander@hussa.rs" },
  { "id": 2, "name": "Philip", "lastname": "Hughes", "email": "philip.hughes@hussa.rs" },
  { "id": 3, "name": "Walter", "lastname": "Nelson", "email": "walter.nelson@hussa.rs" },
  { "id": 4, "name": "Ashley", "lastname": "Hernandez", "email": "ashley.hernandez@hussa.rs" },
  { "id": 5, "name": "Donna", "lastname": "Washington", "email": "donna.washington@hussa.rs" },
  { "id": 6, "name": "Andrew", "lastname": "White", "email": "andrew.white@hussa.rs" },
  { "id": 7, "name": "Sharon", "lastname": "Allen", "email": "sharon.allen@hussa.rs" },
  { "id": 8, "name": "Russell", "lastname": "Parker", "email": "russell.parker@hussa.rs" },
  { "id": 9, "name": "Janet", "lastname": "Stewart", "email": "janet.stewart@hussa.rs" }
];

export function fetchActivities() {
    return fetch(activitiesUrl).then(() => mockedActivitiesResponse);
};

export function fetchCoordinators() {
    return fetch(coordinatorsUrl).then(() => mockedCoordinatorsResponse);
};
