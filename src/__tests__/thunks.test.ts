import fetchMock from 'fetch-mock';
import { mockedActivitiesResponse, mockedCoordinatorsResponse } from '../api/fetches';
import { activitiesUrl, coordinatorsUrl } from '../api/urls';
import { SET_ACTIVITIES } from '../store/actions';

describe('thunk', () => {

    beforeEach(() => {
        // fetchMock.mock(activitiesUrl, { status: 200, body: mockedActivitiesResponse });
        fetchMock.mock(coordinatorsUrl, { status: 200, body: mockedCoordinatorsResponse });
    });

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    test('should load activities', async () => {
        // const dispatch = jest.fn();
        // const expectedAction = { type: SET_ACTIVITIES, payload: mockedActivitiesResponse };
        
        // fetchMock.get(activitiesUrl, mockedActivitiesResponse);

        // await getActivitiesThunk()(dispatch);

        // expect(dispatch).toBeCalledWith(expectedAction);
    });
});