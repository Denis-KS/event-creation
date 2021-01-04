import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { activitiesUrl, coordinatorsUrl, eventsUrl } from '../../api/urls';
import { SET_ACTIVITIES, SET_COORDINATORS, SET_EVENTS } from '../../store/actions';
import { initialState } from '../../store/reducer';
import { getActivitiesThunk, getCoordinatorsThunk, getEventsThunk } from '../../store/thunks';
import { mockedActivitiesResponse, mockedCoordinatorsResponse } from '../../__mocks__/fetches.mock';
import { createAxiosMock } from '../../__mocks__/utils';
import { mockedActivitiesArray, mockedEventsArray } from '../../__mocks__/events.mock';

const mock = createAxiosMock();

describe('Thunks', () => {

    const mockStore = configureStore([thunk]);

    beforeEach(() => {
        mock.onGet(eventsUrl).reply(200, mockedEventsArray);
        mock.onGet(activitiesUrl).reply(200, mockedActivitiesArray);
        mock.onGet(coordinatorsUrl).reply(200, mockedCoordinatorsResponse);
    });

    const thunksTestSuite = [
        {
            name: 'should dispatch SET_EVENTS action',
            thunk: getEventsThunk,
            expectedActions: [{ type: SET_EVENTS, payload: mockedEventsArray }],
        },
        {
            name: 'should dispatch SET_ACTIVITIES action',
            thunk: getActivitiesThunk,
            expectedActions: [{ type: SET_ACTIVITIES, payload: mockedActivitiesArray }],
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