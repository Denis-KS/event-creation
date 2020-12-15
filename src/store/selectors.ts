import { createSelector } from "reselect";
import { IActivity } from "../models/activity.model";
import { ICoordinator } from "../models/coordinator.model";
import { ICredentials } from "../models/credentials.model";
import { IEvent } from "../models/event.model";
import { IGroupedDropdown } from "../models/inputs.model";
import { IStore } from "../models/store.model";
import { serializeCoordinator } from "./selector-helpers";

export const getActiveUserIdSelector = (state: IStore): number => state.activeUserId;
export const getActivitiesSelector = (state: IStore): IActivity[] => state.activities;
export const getCoordinatorsSelector = (state: IStore): ICoordinator[] => state.coordinators;
export const getEventsSelector = (state: IStore): Map<number, IEvent> => state.events;

export const getEventsArraySelector = createSelector(
    getEventsSelector,
    (events: Map<number, IEvent>): IEvent[] => Array.from(events.values())
);

export const getActivitiesWithDefaultSelector = createSelector(
    getActivitiesSelector,
    (activities: IActivity[]) => {
        const defaultOption: IActivity = { id: 'unselected', name: 'Select Category' };
        return [defaultOption, ...activities];
    }
);

export const getGroupedCoordinatorsSelector = createSelector(
    [getCoordinatorsSelector, getActiveUserIdSelector],
    (coordinators: ICoordinator[], userId: number) => {
        const groupSelf: IGroupedDropdown<ICredentials> = { groupName: 'Me', options: [] };
        const groupOthers: IGroupedDropdown<ICredentials> = { groupName: 'Others', options: [] };

        coordinators.forEach((coordinator: ICoordinator) => {
            const serializedCoordinator: ICredentials = serializeCoordinator(coordinator, userId);
            if (coordinator.id === userId) {
                groupSelf.options.push(serializedCoordinator);
            } else {
                groupOthers.options.push(serializedCoordinator);
            }
        });

        return [groupSelf, groupOthers];
    }
);