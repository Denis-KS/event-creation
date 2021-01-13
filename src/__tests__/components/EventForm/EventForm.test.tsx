import React from "react";
import { render, screen } from "@testing-library/react";
import { EventForm, IEventFormProps } from "../../../components/CreateUpdateEvent/EventForm";
import { mockedActivitiesArrayWithDefault, mockedGroupedCoordinators } from "../../../__mocks__/events.mock";

export function setupComponent(props: IEventFormProps): void {
    render(<EventForm {...props} />);
}

describe('EventForm', () => {

    let mockedProps: IEventFormProps;

    beforeEach(() => {
        mockedProps = {
            event: undefined,
            activities: mockedActivitiesArrayWithDefault,
            coordinators: mockedGroupedCoordinators
        };
    });

    test('should render event form', async () => {
        setupComponent(mockedProps);

        expect(await screen.findByTestId('event-form')).toBeInTheDocument();
    });

    test('should render "About" section', async () => {
        setupComponent(mockedProps);

        expect(await screen.findByText('About')).toBeInTheDocument();
    });

    test('should render "Coordinator" section', async () => {
        setupComponent(mockedProps);

        expect(await screen.findByText('Coordinator')).toBeInTheDocument();
    });

    test('should render "When" section', async () => {
        setupComponent(mockedProps);

        expect(await screen.findByText('When')).toBeInTheDocument();
    });


});