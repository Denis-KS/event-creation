import React from "react";
import { IActivity } from "../../models/activity.model";
import { ICredentials } from "../../models/credentials.model";
import { IEvent } from "../../models/event.model";
import { IGroupedDropdown } from "../../models/inputs.model";
import { Box } from "../styled/Box/Box";
import { FormCoordinatorSection } from "./FormSections/FormCoordinatorSection";
import { FormDateSection } from "./FormSections/FormDateSection";
import { FormGeneralSection } from "./FormSections/FormGeneralSection";

export interface IEventFormProps {
    event?: IEvent;
    activities: IActivity[];
    coordinators: IGroupedDropdown<ICredentials>[];
}

export const EventForm: React.FC<IEventFormProps> = ({ event, activities, coordinators }) => {
    return (
        <Box data-testid="event-form">
            <FormGeneralSection />
            <FormCoordinatorSection />
            <FormDateSection />
        </Box>
    );
};