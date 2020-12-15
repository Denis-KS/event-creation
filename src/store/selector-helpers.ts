import { ICoordinator } from "../models/coordinator.model";
import { ICredentials } from "../models/credentials.model";

export function serializeCoordinator(coordinator: ICoordinator, userId: number): ICredentials {
    let name = `${coordinator.name} ${coordinator.lastname}`.trim();
    name = userId === coordinator.id 
        ? `Me - ${name}`
        : name;

    return { id: coordinator.id, name };
}