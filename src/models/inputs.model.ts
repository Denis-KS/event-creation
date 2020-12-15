import { ICredentials } from "./credentials.model";

export interface IGroupedDropdown<T extends ICredentials> {
    groupName: string;
    options: T[];
}