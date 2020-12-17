import { screen } from "@testing-library/react";
import React from "react";
import { Header } from "../../components/Header/Header";
import { renderWithRouter } from "../../__mocks__/utils";

describe('Header', () => {

    test('should render with "Events" text', async () => {
        renderWithRouter(<Header />);
        expect(await screen.findByText('Events')).toBeInTheDocument();
    });

    test('should render with "Events" text on unprocessable path', async () => {
        renderWithRouter(<Header />, { route: '/unknown' });
        expect(await screen.findByText('Events')).toBeInTheDocument();
    });

    test('should render with "Event Overview" text when specific event selected', async () => {
        renderWithRouter(<Header />, { route: '/1' });
        expect(await screen.findByText('Event Overview')).toBeInTheDocument();
    });

    test('should render with "New Event" text when creating event', async () => {
        renderWithRouter(<Header />, { route: '/new-event' });
        expect(await screen.findByText('New Event')).toBeInTheDocument();
    });

    test('should render with "Edit Event" text when editing existing event', async () => {
        renderWithRouter(<Header />, { route: '/update-event/1' });
        expect(await screen.findByText('Edit Event')).toBeInTheDocument();
    });
});