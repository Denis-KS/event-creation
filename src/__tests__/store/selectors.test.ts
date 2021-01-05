import { IStore } from "../../models/store.model";
import {
    getActiveUserIdSelector,
    getActivitiesSelector,
    getCoordinatorsSelector,
    getEventsSelector,
    getEventsArraySelector,
    getGroupedCoordinatorsSelector,
    getActivitiesListSelector,
    getCoordinatorsListSelector,
    getSearchQuerySelector
} from "../../store/selectors";
import {
    mockedInitialEvents,
    mockedEvent,
    mockedActivitiesMap,
    mockedActivitiesArrayWithDefault,
    mockedCoordinatorsMap,
    mockedSerializedCoordinatorsArray,
    mockedCoordinatorSelfGroup,
    mockedCoordinatorsOthersGroup
} from "../../__mocks__/events.mock";

export const mockedState: IStore = {
    activeUserId: 0,
    activities: mockedActivitiesMap,
    coordinators: mockedCoordinatorsMap,
    events: mockedInitialEvents,
    searchQuery: '',
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
        expect(getCoordinatorsSelector(mockedState)).toEqual(mockedCoordinatorsMap);
    });

    test('should get coordinators as array', () => {
        expect(getCoordinatorsListSelector(mockedState)).toEqual(mockedSerializedCoordinatorsArray);
    });

    test('should get events', () => {
        expect(getEventsSelector(mockedState)).toBe(mockedInitialEvents);
    });

    test('should get events array', () => {
        const expectedResult = [mockedEvent, {...mockedEvent, id: 1, title: 'Second Test Event'}, {...mockedEvent, id: 2, title: 'Third Event'}];
        expect(getEventsArraySelector.resultFunc(mockedInitialEvents)).toEqual(expectedResult);
    });

    test('should get grouped coordinators', () => {
        const expectedResult = [
            { groupName: 'Me', options: mockedCoordinatorSelfGroup }, 
            { groupName: 'Others', options: mockedCoordinatorsOthersGroup },
        ];

        expect(getGroupedCoordinatorsSelector.resultFunc(mockedSerializedCoordinatorsArray, 0)).toEqual(expectedResult);
    });

    test('should get search query', () => {
        expect(getSearchQuerySelector({ ...mockedState, searchQuery: 'test' })).toBe('test');
    });

});