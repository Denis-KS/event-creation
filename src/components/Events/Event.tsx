import React from "react";
import styled from "styled-components";
import { IEvent } from "../../models/event.model";
import { Box } from "../styled/Box/Box";
import { FlexBox } from "../styled/Box/FlexBox";
import { Text } from "../styled/Text";
import { EventDisplayProperty } from "./EventDisplayProperty";

export interface IEventProps {
    event: IEvent;
    category: string;
    coordinator: string;
}

const EventBox = styled(FlexBox)`
    background: #fff;
    box-shadow: 5px 5px 5px #666;
    flex-direction: column;
    padding: 10px;
    margin: 0 0 10px 0;
`;

export const Event: React.FC<IEventProps> = ({ event, category, coordinator }) => {
    const { title, description, paid_event, event_fee, reward, duration } = event;

    return (
        <EventBox data-testid="event">
            <Box width="80%">
                <Box><Text data-testid="event-title" weight="bold">{title}</Text></Box>
                <Box><Text data-testid="event-description" size="13px">{description}</Text></Box>
            </Box>
            <FlexBox>
                <Box>
                    <EventDisplayProperty testId="event-category" title="Category" value={category} />
                    <EventDisplayProperty testId="event-payment-type" title="Payment" value={paid_event ? 'Paid Event' : 'Free Event'} />
                    {paid_event && <EventDisplayProperty testId="event-payment-fee" title="Fee" value={event_fee} />}
                    <EventDisplayProperty testId="event-reward" title="Reward" value={reward > 0 ? `${reward} reward points for attendance` : 'No Reward'} />
                </Box>
                <Box>
                    <span data-testid="event-coordinator">Coordinator: {coordinator}</span>
                    <span data-testid="event-coordinator-email">Email: {event.coordinator.email}</span>
                </Box>
                <Box>
                    <span data-testid="event-duration">Duration: {duration} hour(s)</span>
                </Box>
            </FlexBox>
        </EventBox>
    );
}