import configureStore from 'redux-mock-store';
import { mockedActivitiesResponse, mockedCoordinatorsResponse } from '../api/fetches';
import { addOrUpdateEventAction, ADD_OR_UPDATE_EVENT, deleteEventAction, DELETE_EVENT, setActivitiesAction, setCoordinatorsAction, SET_ACTIVITIES, SET_COORDINATORS } from '../store/actions';
import { initialState } from '../store/reducer';
import { mockedActivity } from '../__mocks__/events.mock';

describe('Actions', () => {

    const mockStore = configureStore([]);

    const actionsTestSuite = [
        {
            action: addOrUpdateEventAction,
            actionType: ADD_OR_UPDATE_EVENT,
            payload: mockedActivity,
            expectedActions: [{ type: ADD_OR_UPDATE_EVENT, payload: mockedActivity }],
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
            payload: mockedActivitiesResponse,
            expectedActions: [{ type: SET_ACTIVITIES, payload: mockedActivitiesResponse }],
        },
        {
            action: setCoordinatorsAction,
            actionType: SET_COORDINATORS,
            payload: mockedCoordinatorsResponse,
            expectedActions: [{ type: SET_COORDINATORS, payload: mockedCoordinatorsResponse }],
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