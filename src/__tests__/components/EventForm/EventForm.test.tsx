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

    test('should render label and input for title', async () => {
        setupComponent(mockedProps);
        expect(await screen.findByText('Title')).toBeInTheDocument();
        const input = screen.getByTestId('form-title');
        expect(input).toBeInTheDocument();
        expect(input.getAttribute('placeholder')).toBe('Make it short and clear');
    });

    test('should render label and input for description', async () => {
        setupComponent(mockedProps);

        expect(await screen.findByText('Description')).toBeInTheDocument();
        const input = screen.getByTestId('form-description');
        expect(input).toBeInTheDocument();
        expect(input.getAttribute('placeholder')).toBe('Write about your event, be creative');
        expect(screen.getByText('Max characters length')).toBeInTheDocument();
        expect(screen.getByTestId('form-description-char-count')).toBeInTheDocument();
    });

    test('should render label and input for category', async () => {
        setupComponent(mockedProps);
        expect(await screen.findByText('Category')).toBeInTheDocument();
        expect(screen.getByTestId('form-category')).toBeInTheDocument();
    });

    test('should render label and input for payment', async () => {
        setupComponent(mockedProps);

        expect(await screen.findByText('Payment')).toBeInTheDocument();
        const input = screen.getByTestId('form-payment');
        expect(input).toBeInTheDocument();
    });

    test('should render label and input for reward', async () => {
        setupComponent(mockedProps);

        expect(await screen.findByText('Reward')).toBeInTheDocument();
        const input = (screen.getByTestId('form-reward'));
        expect(input).toBeInTheDocument();
        expect(input.getAttribute('placeholder')).toBe('Number');
        expect(screen.getByText('reward points for attendance')).toBeInTheDocument();
    });

    // test('should render label and input for responsible', async () => {
    //     setupComponent(mockedProps);

    //     expect(await screen.findByText('')).toBeInTheDocument();
    //     expect(screen.getByTestId('')).toBeInTheDocument();
    // });

    // test('should render label and input for email', async () => {
    //     setupComponent(mockedProps);

    //     expect(await screen.findByText('')).toBeInTheDocument();
    //     expect(screen.getByTestId('')).toBeInTheDocument();
    // });

    // test('should render label and input for start date and time', async () => {
    //     setupComponent(mockedProps);

    //     expect(await screen.findByText('')).toBeInTheDocument();
    //     expect(screen.getByTestId('')).toBeInTheDocument();
    // });

    // test('should render label and input for duration', async () => {
    //     setupComponent(mockedProps);

    //     expect(await screen.findByText('')).toBeInTheDocument();
    //     expect(screen.getByTestId('')).toBeInTheDocument();
    // });

});