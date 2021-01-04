import { IActivity } from "./activity.model";
import { ICoordinator } from "./coordinator.model";
import { IEvent } from "./event.model";

export interface IStore {
    activeUserId: number;
    events: Map<number, IEvent>;
    coordinators: Map<number, ICoordinator>;
    activities: Map<number | string, IActivity>;
}

export interface IFiltersStoreState {
    searchQuery: string;
}