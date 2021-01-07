import { isEmpty } from "lodash";
import { createSelector } from "reselect";
import { IActivity } from "../models/activity.model";
import { ICoordinator } from "../models/coordinator.model";
import { ICredentials } from "../models/credentials.model";
import { IEvent } from "../models/event.model";
import { IGroupedDropdown } from "../models/inputs.model";
import { IStore } from "../models/store.model";
import { setPrefixToCoordinator } from "./selector-helpers";
import Fuse from 'fuse.js';

export const getActiveUserIdSelector = (state: IStore): number => state.activeUserId;
export const getActivitiesSelector = (state: IStore): Map<string | number, IActivity> => state.activities;
export const getCoordinatorsSelector = (state: IStore): Map<number, ICoordinator> => state.coordinators;
export const getEventsSelector = (state: IStore): Map<number, IEvent> => state.events;
export const getSearchQuerySelector = (state: IStore): string => state.searchQuery;

export const getEventsArraySelector = createSelector(
    [getEventsSelector, getSearchQuerySelector], 
    (events: Map<number, IEvent>, query: string): IEvent[] => {
        const eventsList =  Array.from(events.values());
        if (!isEmpty(query)) {
            const fuse = buildFuse<IEvent>(eventsList);

            return fuse.search(query).map(({ item }) => item as IEvent);
        }
        return eventsList;
    }
);

export const getActivitiesListSelector = createSelector(
    getActivitiesSelector, 
    (activitiesMap: Map<string | number, IActivity>) => Array.from(activitiesMap.values())
);

export const getCoordinatorsListSelector = createSelector(
    getCoordinatorsSelector,
    (coordinatorsMap: Map<number, ICoordinator>) => Array.from(coordinatorsMap.values())
);

export const getGroupedCoordinatorsSelector = createSelector(
    [getCoordinatorsListSelector, getActiveUserIdSelector],
    (coordinators: ICoordinator[], userId: number): IGroupedDropdown<ICredentials>[] => {
        const groupSelf: IGroupedDropdown<ICredentials> = { groupName: 'Me', options: [] };
        const groupOthers: IGroupedDropdown<ICredentials> = { groupName: 'Others', options: [] };

        coordinators.forEach((coordinator: ICoordinator) => {
            const serializedCoordinator: ICredentials = setPrefixToCoordinator(coordinator, userId);
            if (coordinator.id === userId) {
                groupSelf.options.push(serializedCoordinator);
            } else {
                groupOthers.options.push(serializedCoordinator);
            }
        });

        return [groupSelf, groupOthers];
    }
);

function buildFuse<T>(items: T[]): Fuse<T> {
    return new Fuse<T>(items, {
        keys: ['title'],
        minMatchCharLength: 1,
        threshold: 0.1,
        ignoreLocation: true,
    });
}