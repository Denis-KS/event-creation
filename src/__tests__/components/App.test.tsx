import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../../App";
import { renderWithRouter } from "../../__mocks__/utils";

describe('App', () => {

    test('should render header component', async () => {
        render(<App/>);
        expect(await screen.findByTestId('header')).toBeInTheDocument();
    });

    test('should render events list', async () => {
        renderWithRouter(<App />);
        expect(await screen.findByTestId('events')).toBeInTheDocument();
    });

    test('should render event overview', async () => {
        renderWithRouter(<App />, { route: '/1' });
        expect(await screen.findByTestId('event-overview')).toBeInTheDocument();
    });

    test('should render create/update event form on creating event', async () => {
        renderWithRouter(<App />, { route: '/new-event' });
        expect(await screen.findByTestId('create-update-event')).toBeInTheDocument();
    });

    test('should render create/update event form on updating event', async () => {
        renderWithRouter(<App />, { route: '/update-event/1' });
        expect(await screen.findByTestId('create-update-event')).toBeInTheDocument();
    });
});