import { IEvent } from "../models/event.model";
import { IStore } from "../models/store.model";
import { ADD_OR_UPDATE_EVENT, DELETE_EVENT, IBaseAction, SET_ACTIVITIES, SET_COORDINATORS } from "../store/actions";
import { reducer } from "../store/reducer";
import { mockedActivity, mockedCoordinator, mockedEvent, mockedEventsAfterDelete, mockedEventsAfterUpdate, mockedInitialEvents } from "../__mocks__/events.mock";

const initialStoreState: IStore = {
    activeUserId: 0,
    events: new Map<number, IEvent>(),
    activities: [],
    coordinators: [],
};

describe('reducer', () => {
    test('should add an event to the list', () => {
        const expectedResult: IStore = { ...initialStoreState, events: new Map([[0, mockedEvent]]) };
        const action: IBaseAction = { type: ADD_OR_UPDATE_EVENT, payload: mockedEvent };

        expect(reducer(initialStoreState, action)).toEqual(expectedResult);
    });

    test('should remove an event from the list', () => {
        const initialState = { ...initialStoreState, events: mockedInitialEvents };
        const expectedResult: IStore = { ...initialStoreState, events: mockedEventsAfterDelete };
        const action: IBaseAction = {type: DELETE_EVENT, payload: 1 };

        expect(reducer(initialState, action)).toEqual(expectedResult);
    });

    test('should update an event in the list', () => {
        const initialState = { ...initialStoreState, events: mockedInitialEvents };
        const expectedResult: IStore = { ...initialStoreState, events: mockedEventsAfterUpdate };
        const action: IBaseAction = { type: ADD_OR_UPDATE_EVENT, payload: { ...mockedEvent, id: 1, title: 'Updated Test Event' } };

        expect(reducer(initialState, action)).toEqual(expectedResult);
    });

    test('should set activities', () => {
        const activities = [mockedActivity, { ...mockedActivity, id: 1 }];
        const expectedResult: IStore = { ...initialStoreState, activities };
        const action: IBaseAction = { type: SET_ACTIVITIES, payload: activities }

        expect(reducer(initialStoreState, action)).toEqual(expectedResult);
    });

    test('should set coordinators', () => {
        const coordinators = [mockedCoordinator, { ...mockedCoordinator, id: 2 }];
        const expectedResult: IStore = { ...initialStoreState, coordinators };
        const action: IBaseAction = { type: SET_COORDINATORS, payload: coordinators };

        expect(reducer(initialStoreState, action)).toEqual(expectedResult);
    });
});