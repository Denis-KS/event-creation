import React from "react";
import { IActivity } from "../../models/activity.model";
import { ICoordinator } from "../../models/coordinator.model";
import { ICredentials } from "../../models/credentials.model";
import { IEvent } from "../../models/event.model";
import { IGroupedDropdown } from "../../models/inputs.model";
import { Box } from "../styled/Box/Box";
import { EventFormSection } from "./EventFormSection";

export interface IEventFormProps {
    event?: IEvent;
    activities: IActivity[];
    coordinators: IGroupedDropdown<ICredentials>[];
}

export const EventForm: React.FC<IEventFormProps> = ({ event, activities, coordinators }) => {
    return (
        <Box data-testid="event-form">
            <EventFormSection title="About"></EventFormSection>
            <EventFormSection title="Coordinator"></EventFormSection>
            <EventFormSection title="When"></EventFormSection>
        </Box>
    );
};