import { createSelector } from "reselect";
import { IActivity } from "../models/activity.model";
import { ICoordinator } from "../models/coordinator.model";
import { ICredentials } from "../models/credentials.model";
import { IEvent } from "../models/event.model";
import { IGroupedDropdown } from "../models/inputs.model";
import { IStore } from "../models/store.model";
import { setPrefixToCoordinator } from "./selector-helpers";

export const getActiveUserIdSelector = (state: IStore): number => state.activeUserId;
export const getActivitiesSelector = (state: IStore): Map<string | number, IActivity> => state.activities;
export const getCoordinatorsSelector = (state: IStore): Map<number, ICoordinator> => state.coordinators;
export const getEventsSelector = (state: IStore): Map<number, IEvent> => state.events;

export const getEventsArraySelector = createSelector(
    getEventsSelector,
    (events: Map<number, IEvent>): IEvent[] => Array.from(events.values())
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