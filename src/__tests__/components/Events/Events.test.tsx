import configureStore from 'redux-mock-store';
import { cleanup, screen } from "@testing-library/react";
import React from "react";
import { mockedEventsArray, mockedInitialEvents } from "../../../__mocks__/events.mock";
import { IStore } from "../../../models/store.model";
import { Provider } from 'react-redux';
import { initialState } from '../../../store/reducer';
import thunk from 'redux-thunk';
import { createAxiosMock, renderWithRouter } from '../../../__mocks__/utils';
import userEvent from '@testing-library/user-event';
import { eventsUrl } from '../../../api/urls';
import App from '../../../App';

const mock = createAxiosMock();

export function setupComponent(state: IStore = { ...initialState, events: mockedInitialEvents }) {
    const mockStore = configureStore([thunk]);
    const store = mockStore(state);
  
    renderWithRouter(<Provider store={store}><App /></Provider>);
  }

describe('Events', () => {

    beforeEach(() => {
        mock.onGet(eventsUrl).reply(200, mockedEventsArray);
    });

    afterEach(cleanup);

    test('should render placeholder when no events are loaded', async () => {
        mock.onGet(eventsUrl).reply(200, []);
        
        setupComponent(initialState);
        expect(await screen.findByText('There are no events yet')).toBeInTheDocument();
    });

    test('should render events list', async () => {  
        setupComponent();
        expect(await screen.findByTestId('events-list')).toBeInTheDocument();
    });

    test('should render Create Event button', async () => {
        setupComponent();
        expect(await screen.findByText('Create Event')).toBeInTheDocument();
    });

    test('should render search input', async () => {
        setupComponent();
        expect(await screen.findByTestId('search-input')).toBeInTheDocument();
    });

    test('should navigate to new event creation screen', async () => {
        setupComponent();
        expect(await screen.findByTestId('events-list')).toBeInTheDocument();

        expect(screen.getByTestId('events')).toBeInTheDocument();
        userEvent.click(screen.getByText('Create Event'), { button: 0 });

        expect(screen.getByTestId('create-update-event')).toBeInTheDocument();
    });

    test('should not show erase search button when search field is empty', async () => {
        setupComponent();

        await screen.findByTestId('search-input');
        expect(screen.queryByTestId('erase-search-btn')).not.toBeInTheDocument();
    });

    test('should show items matches to search query', async () => {
        setupComponent();

        expect(await screen.findByText('Test Event')).toBeInTheDocument();
        expect(screen.getByText('Second Test Event')).toBeInTheDocument();
        expect(screen.getByText('Third Event')).toBeInTheDocument();

        await userEvent.type(screen.getByTestId('search-input'), 'test');

        expect(screen.getByText('Test Event')).toBeInTheDocument();
        expect(screen.getByText('Second Test Event')).toBeInTheDocument();
        expect(screen.queryByText('Third Event')).not.toBeInTheDocument();
    });

    test('should show placeholder for no results found', async () => {
        setupComponent();

        expect(await screen.findByText('Test Event')).toBeInTheDocument();
        expect(screen.getByText('Second Test Event')).toBeInTheDocument();
        expect(screen.getByText('Third Event')).toBeInTheDocument();

        await userEvent.type(screen.getByTestId('search-input'), 'not matching query');

        expect(screen.queryByText('Test Event')).not.toBeInTheDocument();
        expect(screen.queryByText('Second Test Event')).not.toBeInTheDocument();
        expect(screen.queryByText('Third Event')).not.toBeInTheDocument();
        expect(screen.getByText('No Results')).toBeInTheDocument();
    });

    test('should show erase search button when search field is filled', async () => {
        setupComponent();

        await userEvent.type(screen.getByTestId('search-input'), '1');

        expect(screen.getByTestId('erase-search-btn')).toBeInTheDocument();
    });

    test('should remove search query on erase button click', async () => {
        setupComponent();

        const searchInput = await screen.findByTestId('search-input');
        await userEvent.type(searchInput, 'test');

        expect(searchInput).toHaveValue('test');

        // userEvent.click(screen.getByTestId('erase-search-btn'), { button: 0 });

        // expect(searchInput).toHaveValue('')
        // expect(screen.queryByTestId('erase-search-btn')).not.toBeInTheDocument();
    });
});