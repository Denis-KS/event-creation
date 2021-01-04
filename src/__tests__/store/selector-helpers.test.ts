import { ICoordinator, ICoordinatorResponse } from "../../models/coordinator.model";
import { ICredentials } from "../../models/credentials.model";
import { serializeCoordinatorFullName, setPrefixToCoordinator } from "../../store/selector-helpers";

describe('serializeCoordinatorFullName', () => {
    test('should return serialized coordinator', () => {
        const mockedCoordinator: ICoordinatorResponse = { 
            "id": 0, 
            "name": "Name", 
            "lastname": "Lastname", 
            "email": "test@test.test"
        };

        const expectedResult: ICoordinator = {
            id: 0,
            name: 'Name Lastname',
            email: 'test@test.test',
        }

        expect(serializeCoordinatorFullName(mockedCoordinator)).toEqual(expectedResult);
    });

    test('should return serialized coordinator when last name do not exist', () => {
        const mockedCoordinator: ICoordinatorResponse = { 
            "id": 0, 
            "name": "Name", 
            "lastname": '', 
            "email": "test@test.test"
        };

        const expectedResult: ICoordinator = {
            id: 0,
            name: 'Name',
            email: 'test@test.test',
        }

        expect(serializeCoordinatorFullName(mockedCoordinator)).toEqual(expectedResult);
    });
});

describe('setPrefixToCoordinator', () => {

    test('should return serialized coordinator with prefix when it is an active user', () => {
        const mockedCoordinator: ICoordinator = { 
            "id": 0, 
            "name": "Name Lastname", 
            "email": "test@test.test"
        };

        const expectedResult: ICredentials = {
            id: 0,
            name: 'Me - Name Lastname',
        }

        expect(setPrefixToCoordinator(mockedCoordinator, 0)).toEqual(expectedResult);
    });

});