import { ICredentials } from "./credentials.model";

export interface ICoordinatorResponse extends ICredentials {
    lastname: string;
    email: string;
}

export interface ICoordinator extends ICredentials {
    email: string;
}
