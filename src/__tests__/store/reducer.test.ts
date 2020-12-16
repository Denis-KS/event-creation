import { IStore } from "../../models/store.model";
import { IBaseAction, ADD_OR_UPDATE_EVENT, DELETE_EVENT, SET_ACTIVITIES, SET_COORDINATORS } from "../../store/actions";
import { initialState, reducer } from "../../store/reducer";
import { mockedEvent, mockedInitialEvents, mockedEventsAfterDelete, mockedEventsAfterUpdate, mockedActivity, mockedCoordinator } from "../../__mocks__/events.mock";

describe('reducer', () => {
    test('should add an event to the list', () => {
        const expectedResult: IStore = { ...initialState, events: new Map([[0, mockedEvent]]) };
        const action: IBaseAction = { type: ADD_OR_UPDATE_EVENT, payload: mockedEvent };

        expect(reducer(initialState, action)).toEqual(expectedResult);
    });

    test('should remove an event from the list', () => {
        const initialStoreState = { ...initialState, events: mockedInitialEvents };
        const expectedResult: IStore = { ...initialState, events: mockedEventsAfterDelete };
        const action: IBaseAction = {type: DELETE_EVENT, payload: 1 };

        expect(reducer(initialStoreState, action)).toEqual(expectedResult);
    });

    test('should update an event in the list', () => {
        const initialStoreState = { ...initialState, events: mockedInitialEvents };
        const expectedResult: IStore = { ...initialState, events: mockedEventsAfterUpdate };
        const action: IBaseAction = { type: ADD_OR_UPDATE_EVENT, payload: { ...mockedEvent, id: 1, title: 'Updated Test Event' } };

        expect(reducer(initialStoreState, action)).toEqual(expectedResult);
    });

    test('should set activities', () => {
        const activities = [mockedActivity, { ...mockedActivity, id: 1 }];
        const expectedResult: IStore = { ...initialState, activities };
        const action: IBaseAction = { type: SET_ACTIVITIES, payload: activities }

        expect(reducer(initialState, action)).toEqual(expectedResult);
    });

    test('should set coordinators', () => {
        const coordinators = [mockedCoordinator, { ...mockedCoordinator, id: 2 }];
        const expectedResult: IStore = { ...initialState, coordinators };
        const action: IBaseAction = { type: SET_COORDINATORS, payload: coordinators };

        expect(reducer(initialState, action)).toEqual(expectedResult);
    });
});