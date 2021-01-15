import React from "react";
import { IActivity } from "../../models/activity.model";
import { ICredentials } from "../../models/credentials.model";
import { IEvent } from "../../models/event.model";
import { IGroupedDropdown } from "../../models/inputs.model";
import { Box } from "../styled/Box/Box";
import { Text } from "../styled/Text";
import { EventFormSection } from "./EventFormSection";

export interface IEventFormProps {
    event?: IEvent;
    activities: IActivity[];
    coordinators: IGroupedDropdown<ICredentials>[];
}

export const EventForm: React.FC<IEventFormProps> = ({ event, activities, coordinators }) => {
    return (
        <Box data-testid="event-form">
            <EventFormSection title="About">
                <Box>
                    <label>Title<input data-testid="form-title" placeholder="Make it short and clear" /></label>
                </Box>
                <Box>
                    <label>Description<textarea data-testid="form-description" placeholder="Write about your event, be creative" /></label>
                    <Text>Max characters length</Text><Text data-testid="form-description-char-count"></Text>
                </Box>
                <Box>
                    <label>Category<select data-testid="form-category" /></label>
                </Box>
                <Box>
                    <label>Payment<Box data-testid="form-payment" /></label>
                </Box>
                <Box>
                    <label>Reward<input data-testid="form-reward" placeholder="Number" /></label>
                    <Text>reward points for attendance</Text>
                </Box>
            </EventFormSection>
            <EventFormSection title="Coordinator"></EventFormSection>
            <EventFormSection title="When"></EventFormSection>
        </Box>
    );
};