import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { activitiesUrl, coordinatorsUrl, eventsUrl } from '../../api/urls';
import { SET_ACTIVITIES, SET_COORDINATORS, SET_EVENTS } from '../../store/actions';
import { initialState } from '../../store/reducer';
import { getActivitiesThunk, getCoordinatorsThunk, getEventsThunk } from '../../store/thunks';
import { mockedActivitiesResponse, mockedCoordinatorsResponse, mockedEventsResponse } from '../../__mocks__/fetches.mock';

describe('Thunks', () => {

    const mockStore = configureStore([thunk]);

    beforeEach(() => {
        fetchMock.mock(eventsUrl, { status: 200, body: mockedEventsResponse });
        fetchMock.mock(activitiesUrl, { status: 200, body: mockedActivitiesResponse });
        fetchMock.mock(coordinatorsUrl, { status: 200, body: mockedCoordinatorsResponse });
    });

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    const thunksTestSuite = [
        {
            name: 'should dispatch SET_EVENTS action',
            thunk: getEventsThunk,
            expectedActions: [{ type: SET_EVENTS, payload: mockedEventsResponse }],
        },
        {
            name: 'should dispatch SET_ACTIVITIES action',
            thunk: getActivitiesThunk,
            expectedActions: [{ type: SET_ACTIVITIES, payload: mockedActivitiesResponse }],
        },
        {
            name: 'should dispatch SET_COORDINATORS action',
            thunk: getCoordinatorsThunk,
            expectedActions: [{ type: SET_COORDINATORS, payload: mockedCoordinatorsResponse }],
        }
    ];

    thunksTestSuite.forEach(({ name, thunk, expectedActions }) => {
        test(name, () => {
            const store = mockStore(initialState);

            return store.dispatch(thunk() as any).then(() => {
                const actions = store.getActions();
                expect(actions).toEqual(expectedActions);
            });
        });
    }); 
});