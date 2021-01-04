import { ICoordinator, ICoordinatorResponse } from "../models/coordinator.model";
import { ICredentials } from "../models/credentials.model";

export function setPrefixToCoordinator(coordinator: ICoordinator, userId: number): ICredentials {
    const name = userId === coordinator.id 
        ? `Me - ${coordinator.name}`
        : coordinator.name;

    return { id: coordinator.id, name };
};

export function serializeCoordinatorFullName({ id, name, lastname, email }: ICoordinatorResponse): ICoordinator {
    return { id, name: `${name} ${lastname}`.trim(), email };
}