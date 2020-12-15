import { IStore } from "../models/store.model";
import { getActiveUserIdSelector, getActivitiesSelector, getActivitiesWithDefaultSelector, getCoordinatorsSelector, getEventsArraySelector, getEventsSelector, getGroupedCoordinatorsSelector } from "../store/selectors";
import { mockedEvent, mockedInitialEvents } from "../__mocks__/events.mock";
import { coordinatorSelf, coordinatorsOthers, mockedActivitiesResponse, mockedCoordinatorsResponse } from "../__mocks__/fetches.mock";

export const mockedState: IStore = {
    activeUserId: 0,
    activities: mockedActivitiesResponse,
    coordinators: mockedCoordinatorsResponse,
    events: mockedInitialEvents,
};

describe('Selectors', () => {

    test('should get activeUserId', () => {
        expect(getActiveUserIdSelector(mockedState)).toBe(0);
    });

    test('should get activities', () => {
        expect(getActivitiesSelector(mockedState)).toBe(mockedActivitiesResponse);
    });

    test('should get coordinators', () => {
        expect(getCoordinatorsSelector(mockedState)).toBe(mockedCoordinatorsResponse);
    });

    test('should get events', () => {
        expect(getEventsSelector(mockedState)).toBe(mockedInitialEvents);
    });

    test('should get events array', () => {
        const expectedResult = [mockedEvent, {...mockedEvent, id: 1}, {...mockedEvent, id: 2}];
        expect(getEventsArraySelector.resultFunc(mockedInitialEvents)).toEqual(expectedResult);
    });

    test('should get activities with default option', () => {
        const expectedResult = [{ id: 'unselected', name: 'Select Category' }, ...mockedActivitiesResponse];
        expect(getActivitiesWithDefaultSelector.resultFunc(mockedActivitiesResponse)).toEqual(expectedResult);
    });

    test('should get grouped coordinators', () => {
        const expectedResult = [
            { groupName: 'Me', options: coordinatorSelf }, 
            { groupName: 'Others', options: coordinatorsOthers },
        ];

        expect(getGroupedCoordinatorsSelector.resultFunc(mockedCoordinatorsResponse, 0)).toEqual(expectedResult);
    });

});