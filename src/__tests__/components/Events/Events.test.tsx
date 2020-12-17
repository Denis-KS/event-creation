import { screen, render } from "@testing-library/react";
import React from "react";
import fetchMock from "fetch-mock";
import { eventsUrl } from "../../../api/urls";
import { mockedEventsResponse } from "../../../__mocks__/fetches.mock";
import App from "../../../App";

describe('Events', () => {

    beforeEach(() => {
        render(<App />);
    });

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    test('should render placeholder when no events are loaded', async () => {
        fetchMock.mock(eventsUrl, { status: 200, body: [] });
        expect(await screen.findByText('There are no events yet')).toBeInTheDocument();
    });

    test.only('should render events list', async () => {
        fetchMock.mock(eventsUrl, { status: 200, body: [mockedEventsResponse] });
        expect(await screen.findByTestId('events-list')).toBeInTheDocument();
    });
});