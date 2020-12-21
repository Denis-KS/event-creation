import React from "react";
import { IEvent } from "../../models/event.model";

export interface IEventProps {
    event: IEvent;
    category: string;
    coordinator: string;
}

export const Event: React.FC<IEventProps> = ({ event, category, coordinator }) => {
    const { title, description, paid_event, event_fee, reward, duration } = event;

    return (
        <div data-testid="event">
            <span data-testid="event-title">Title: {title}</span>
            <span data-testid="event-description">Description: {description}</span>
            <span data-testid="event-category">Category: {category}</span>
            <span data-testid="event-payment-type">Payment: { paid_event ? 'Paid Event' : 'Free Event' }</span>
            {paid_event && <span data-testid="event-payment-fee">Fee: {event_fee}</span>}
            <span data-testid="event-reward">Reward: { reward > 0 ? `${reward} reward points for attendance` : 'No Reward'}</span>
            <span data-testid="event-coordinator">Coordinator: {coordinator}</span>
            <span data-testid="event-coordinator-email">Email: {event.coordinator.email}</span>
            <span data-testid="event-duration">Duration: {duration} hour(s)</span>

        </div>
    );
}