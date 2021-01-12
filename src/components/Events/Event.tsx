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
}

export const EventGridBox = styled(Box)`
    display: grid;
    grid-template-columns: repeat(12, minmax(20px, 1fr));
    background: #fff;
    box-shadow: 5px 5px 5px #666;
    padding: 10px;
    margin: 0 0 10px 0;
`;

const TitleGridArea = styled(FlexBox)`
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 12;
    align-items: center;
`;

const ControlsGridArea = styled(FlexBox)`
    grid-row: 1;
    justify-content: flex-end;
`;

const DescriptionGridArea = styled(Box)`
    grid-row: 2;
    grid-column-start: 1;
    grid-column-end: 13;
    height: 40px;
`;

const CommonInfoGridArea = styled(Box)`
    grid-row: 3;
    grid-column-start: 1;
    grid-column-end: 5;
`;

const CoordinatorInfoGridArea = styled(Box)`
    grid-row: 3;
    grid-column-start: 5;
    grid-column-end: 9; 
`;

const DateInfoGridArea = styled(Box)`
    grid-row: 3;
    grid-column-start: 9;
    grid-column-end: 13;
`;

export const Event: React.FC<IEventProps> = ({ event, category, coordinator }) => {
    const { title, description, paid_event, event_fee, reward, duration } = event;

    const renderEventFee = useCallback(() => {
        const color = paid_event ? 'initial' : 'green';
        return <Text data-testid="event-fee" size='14px' color={color} padding="0 0 0 10px">
            {paid_event ? `${event_fee}$` : 'Free'}
        </Text>
    }, [event_fee, paid_event]);

    return (
        <EventGridBox data-testid="event">
            <TitleGridArea>
                <Text data-testid="event-title" weight="bold" size='18px'>{title}</Text>
                {renderEventFee()}
            </TitleGridArea>
            <ControlsGridArea>
                <IconButton icon={DELETE_ICON} testId="delete-event-btn" />
            </ControlsGridArea>
            <DescriptionGridArea lineHeight={1}>
                <Text data-testid="event-description" size="13px">{description}</Text>
            </DescriptionGridArea>
            <CommonInfoGridArea>
                <EventDisplayProperty testId="event-category" title="Category" value={category} />
                <EventDisplayProperty testId="event-reward" title="Reward" value={reward > 0 ? `${reward} reward points for attendance` : 'No Reward'} />
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