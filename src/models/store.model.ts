import { IActivity } from "./activity.model";
import { ICoordinator } from "./coordinator.model";
import { IEvent } from "./event.model";

export interface IStore {
    activeUserId: number;
    events: Map<number, IEvent>;
    coordinators: ICoordinator[];
    activities: Map<number | string, IActivity>;
}