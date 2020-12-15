import { ICoordinator } from "../models/coordinator.model";
import { ICredentials } from "../models/credentials.model";
import { serializeCoordinator } from "../store/selector-helpers";

describe('Selector Helpers', () => {
    test('should return serialized coordinator', () => {
        const mockedCoordinator: ICoordinator = { 
            "id": 0, 
            "name": "Name", 
            "lastname": "Lastname", 
            "email": "test@test.test"
        };

        const expectedResult: ICredentials = {
            id: 0,
            name: 'Name Lastname',
        }

        expect(serializeCoordinator(mockedCoordinator, 1)).toEqual(expectedResult);
    });

    test('should return serialized coordinator when last name do not exist', () => {
        const mockedCoordinator: ICoordinator = { 
            "id": 0, 
            "name": "Name", 
            "lastname": '', 
            "email": "test@test.test"
        };

        const expectedResult: ICredentials = {
            id: 0,
            name: 'Name',
        }

        expect(serializeCoordinator(mockedCoordinator, 1)).toEqual(expectedResult);
    });

    test('should return serialized coordinator with prefix when it is an active user', () => {
        const mockedCoordinator: ICoordinator = { 
            "id": 0, 
            "name": "Name", 
            "lastname": 'Lastname', 
            "email": "test@test.test"
        };

        const expectedResult: ICredentials = {
            id: 0,
            name: 'Me - Name Lastname',
        }

        expect(serializeCoordinator(mockedCoordinator, 0)).toEqual(expectedResult);
    });

});