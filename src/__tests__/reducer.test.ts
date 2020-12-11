import { IEvent } from "../models/event.model";
import { IStore } from "../models/store.model";
import { ADD_EVENT } from "../store/actions";
import { reducer } from "../store/reducer";
import { mockedEvent } from "../__mocks__/events.mock";

const initialStoreState: IStore = {
    activeUserId: 0,
    events: new Map<number, IEvent>(),
    activities: [],
    coordinators: [],

};

describe('reducer', () => {
    test('should add an event to the list', () => {
        const expectedResult: IStore = { ...initialStoreState, events: new Map([[0, mockedEvent]]) };
        const action = { type: ADD_EVENT, payload: mockedEvent }

        expect(reducer(initialStoreState, action)).toEqual(expectedResult);
    });

    // test('should remove an event from the list', () => {

    // });

    // test('should update an event in the list', () => {

    // });

    // test('should set activities', () => {

    // });

    // test('should set coordinators', () => {

    // });
});