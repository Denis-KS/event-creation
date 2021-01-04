import configureStore from 'redux-mock-store';
import { 
    addOrUpdateEventAction,
    ADD_OR_UPDATE_EVENT, 
    deleteEventAction,
    DELETE_EVENT,
    eraseSearchQueryAction,
    setActivitiesAction,
    setCoordinatorsAction,
    setEventsAction,
    setSearchQueryAction,
    SET_ACTIVITIES,
    SET_COORDINATORS,
    SET_EVENTS,
    SET_SEARCH_QUERY
} from '../../store/actions';
import { initialState } from '../../store/reducer';
import { mockedActivitiesArray, mockedCoordinatorsArray, mockedEvent, mockedEventsArray } from '../../__mocks__/events.mock';

describe('Actions', () => {

    const mockStore = configureStore([]);

    const actionsTestSuite = [
        {
            action: setEventsAction,
            actionType: SET_EVENTS,
            payload: mockedEventsArray,
            expectedActions: [{type: SET_EVENTS, payload: mockedEventsArray}],
        },
        {
            action: addOrUpdateEventAction,
            actionType: ADD_OR_UPDATE_EVENT,
            payload: mockedEvent,
            expectedActions: [{ type: ADD_OR_UPDATE_EVENT, payload: mockedEvent }],
        },
        {
            action: deleteEventAction,
            actionType: DELETE_EVENT,
            payload: 1,
            expectedActions: [{ type: DELETE_EVENT, payload: 1 }],
        },
        {
            action: setActivitiesAction,
            actionType: SET_ACTIVITIES,
            payload: mockedActivitiesArray,
            expectedActions: [{ type: SET_ACTIVITIES, payload: mockedActivitiesArray }],
        },
        {
            action: setCoordinatorsAction,
            actionType: SET_COORDINATORS,
            payload: mockedCoordinatorsArray,
            expectedActions: [{ type: SET_COORDINATORS, payload: mockedCoordinatorsArray }],
        },
        {
            action: setSearchQueryAction,
            actionType: SET_SEARCH_QUERY,
            payload: 'test',
            expectedActions: [{ type: SET_SEARCH_QUERY, payload: 'test' }],
        },
        {
            action: eraseSearchQueryAction,
            actionType: SET_SEARCH_QUERY,
            expectedActions: [{ type: SET_SEARCH_QUERY, payload: '' }],
        }
    ];

    actionsTestSuite.forEach(({ action, actionType, payload, expectedActions }) => {
        it(`should dispatch ${actionType} `, () => {
            const store = mockStore(initialState);

            store.dispatch(action(payload as any));

            const actions = store.getActions();

            expect(actions).toEqual(expectedActions);

        });
    })

});