import { render, screen } from "@testing-library/react";
import React from "react";
import { IEventProps } from "../../../components/Events/Event";
import { Event } from '../../../components/Events/Event';
import { mockedEvent } from "../../../__mocks__/events.mock";

function setupComponent(props: IEventProps): void {
    render(<Event { ...props } />);
}

describe('Event', () => {

    let mockedProps: IEventProps;

    beforeEach(() => {
        mockedProps = {
            event: { ...mockedEvent },
            category: 'Test Category',
            coordinator: 'Test Coordinator',
        }
    });

    test('should render event title', () => {
        setupComponent(mockedProps);

        const element = screen.getByTestId('event-title');

        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('Test Event');
    });

    test('should render event description', () => {
        setupComponent(mockedProps);

        const element = screen.getByTestId('event-description');

        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('Test Description');
    });

    test('should display category', () => {
        setupComponent(mockedProps);

        const element = screen.getByTestId('event-category');

        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('Test Category');
    });

    test('should display payment type as free event', () => {
        setupComponent(mockedProps);

        const element = screen.getByTestId('event-payment-type');

        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('Free Event');
    });

    test('should display payment type as paid event', () => {
        mockedProps.event.paid_event = true;
        setupComponent(mockedProps);

        const element = screen.getByTestId('event-payment-type');

        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('Paid Event');
    });

    test('should not display paymant amount if event is free', () => {
        setupComponent(mockedProps);

        expect(screen.queryByTestId('event-payment-fee')).toBeNull();
    });

    test('should display payment amount when event is paid', () => {
        mockedProps.event.paid_event = true;
        mockedProps.event.event_fee = 100500;

        setupComponent(mockedProps);

        const element = screen.getByTestId('event-payment-fee');

        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('100500');
    });

    test('should display No Reward when no reward for attending event', () => {
        setupComponent(mockedProps);

        const element = screen.getByTestId('event-reward');

        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('No Reward');
    });

    test('should display descriptive reward points when reward is set', () => {
        mockedProps.event.reward = 100500;
        setupComponent(mockedProps);

        const element = screen.getByTestId('event-reward');

        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('100500 reward points for attendance');
    });

    test('should display event coordinator', () => {
        setupComponent(mockedProps);

        const element = screen.getByTestId('event-coordinator');

        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('Test Coordinator');
    });

    test('should display coordinator email', () => {
        setupComponent(mockedProps);

        const element = screen.getByTestId('event-coordinator-email');
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('test@test.com');
    });

    test('should display event date and time', () => {
        setupComponent(mockedProps);

        const element = screen.getByTestId('event-date');
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('0000-00-00 00:00');
    });

    test('should display duration', () => {
        setupComponent(mockedProps);

        const element = screen.getByTestId('event-duration');
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('5 hour(s)');
    });
});