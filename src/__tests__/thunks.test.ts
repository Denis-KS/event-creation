import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { mockedActivitiesResponse, mockedCoordinatorsResponse } from '../api/fetches';
import { activitiesUrl, coordinatorsUrl } from '../api/urls';
import { SET_ACTIVITIES, SET_COORDINATORS } from '../store/actions';
import { initialState } from '../store/reducer';
import { getActivitiesThunk, getCoordinatorsThunk } from '../store/thunks';

describe('Thunks', () => {

    const mockStore = configureStore([thunk]);

    beforeEach(() => {
        fetchMock.mock(activitiesUrl, { status: 200, body: mockedActivitiesResponse });
        fetchMock.mock(coordinatorsUrl, { status: 200, body: mockedCoordinatorsResponse });
    });

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    const thunksTestSuite = [
        {
            name: 'should dispatch SET_ACTIVITIES action',
            thunk: getActivitiesThunk,
            expectedActions: [{ type: SET_ACTIVITIES, payload: mockedActivitiesResponse }],
        },
        {
            name: 'should dispatch SET_COORDINATORS_ACTION',
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