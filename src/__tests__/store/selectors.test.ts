import { IStore } from "../../models/store.model";
import { getActiveUserIdSelector, getActivitiesSelector, getCoordinatorsSelector, getEventsSelector, getEventsArraySelector, getGroupedCoordinatorsSelector, getActivitiesListSelector } from "../../store/selectors";
import { mockedInitialEvents, mockedEvent, mockedActivitiesMap, mockedActivitiesArrayWithDefault } from "../../__mocks__/events.mock";
import { mockedCoordinatorsResponse, coordinatorSelf, coordinatorsOthers } from "../../__mocks__/fetches.mock";

export const mockedState: IStore = {
    activeUserId: 0,
    activities: mockedActivitiesMap,
    coordinators: mockedCoordinatorsResponse,
    events: mockedInitialEvents,
};

describe('Selectors', () => {

    test('should get activeUserId', () => {
        expect(getActiveUserIdSelector(mockedState)).toBe(0);
    });

    test('should get activities', () => {
        expect(getActivitiesSelector(mockedState)).toEqual(mockedActivitiesMap);
    });

    test('should get activities as array', () => {
        expect(getActivitiesListSelector(mockedState)).toEqual(mockedActivitiesArrayWithDefault);
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

    test('should get grouped coordinators', () => {
        const expectedResult = [
            { groupName: 'Me', options: coordinatorSelf }, 
            { groupName: 'Others', options: coordinatorsOthers },
        ];

        expect(getGroupedCoordinatorsSelector.resultFunc(mockedCoordinatorsResponse, 0)).toEqual(expectedResult);
    });

});