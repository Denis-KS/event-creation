import React, { useCallback } from "react";
import styled from "styled-components";
import { IEvent } from "../../models/event.model";
import { DELETE_ICON } from "../../utils/icons";
import { IconButton } from "../common/IconButton";
import { Box } from "../styled/Box/Box";
import { FlexBox } from "../styled/Box/FlexBox";
import { Text } from "../styled/Text";
import { EventDisplayProperty } from "./EventDisplayProperty";

export interface IEventProps {
    event: IEvent;
    category: string;
    coordinator: string;
    deleteEvent: (id: number) => void;
}

export const EventGridBox = styled(Box)`
    display: grid;
    grid-template-areas:
        "title title payment controls"
        "description description description description"
        "common coordinator coordinator coordinator"
        "date date date date";
    grid-template-columns: 50% 1fr auto 20px;

    background: #fff;
    box-shadow: 5px 5px 5px #666;
    padding: 10px;
    margin: 0 0 10px 0;
`;

const TitleGridArea = styled(Box)`
    grid-area: title;
    align-items: center;
`;

const PaymentGridArea = styled(Box)`
    grid-area: payment;
    padding: 0 3px;
`;

const ControlsGridArea = styled(FlexBox)`
    grid-area: controls;
    align-items: center;
`;

const DescriptionGridArea = styled(Box)`
    grid-area: description;
    text-align: justify;
    height: 50px;
`;

const CommonInfoGridArea = styled(Box)`
    grid-area: common;
`;

const CoordinatorInfoGridArea = styled(Box)`
    grid-area: coordinator;
`;

const DateInfoGridArea = styled(Box)`
    grid-area: date;
`;

export const Event: React.FC<IEventProps> = ({ event, category, coordinator, deleteEvent }) => {
    const { title, description, paid_event, event_fee, reward, duration } = event;

    const renderEventFee = useCallback(() => {
        const color = paid_event ? 'initial' : 'green';
        return <Text data-testid="event-fee" size='14px' color={color} padding="0 0 0 10px">
            {paid_event ? `${event_fee}$` : 'Free'}
        </Text>
    }, [event_fee, paid_event]);

    const handleDeleteClick = useCallback(() => {
        deleteEvent(event.id);
    }, [deleteEvent, event.id]);

    return (
        <EventGridBox data-testid="event">
            <TitleGridArea>
                <Text data-testid="event-title" weight="bold" size='18px'>{title}</Text>
            </TitleGridArea>
            <PaymentGridArea>
                {renderEventFee()}
            </PaymentGridArea>
            <ControlsGridArea>
                <IconButton icon={DELETE_ICON} testId="delete-event-btn" onClick={handleDeleteClick} />
            </ControlsGridArea>
            <DescriptionGridArea lineHeight={1}>
                <Text data-testid="event-description" size="13px">{description}</Text>
            </DescriptionGridArea>
            <CommonInfoGridArea>
                <EventDisplayProperty testId="event-category" title="Category" value={category} />
                <EventDisplayProperty testId="event-reward" title="Reward" value={reward > 0 ? `${reward} points` : 'No Reward'} />
            </CommonInfoGridArea>
            <CoordinatorInfoGridArea>
                <EventDisplayProperty testId="event-coordinator" title="Coordinator" value={coordinator} />
                <EventDisplayProperty testId="event-coordinator-email" title="Email" value={event.coordinator.email} />
            </CoordinatorInfoGridArea>
            <DateInfoGridArea>
                <EventDisplayProperty testId="event-duration" title="Duration" value={`${duration} hour(s)`} />
            </DateInfoGridArea>
        </EventGridBox>
    );
}