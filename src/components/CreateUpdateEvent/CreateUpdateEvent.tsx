import React from "react";
import { EventForm } from "./EventForm";
import { Box } from "../styled/Box/Box";
import { useSelector } from "react-redux";
import { getActivitiesListSelector, getGroupedCoordinatorsSelector } from "../../store/selectors";

export const CreateUpdateEvent: React.FC = () => {

    const activities = useSelector(getActivitiesListSelector);
    const groupedCoordinators = useSelector(getGroupedCoordinatorsSelector);

    return (
        <Box data-testid="create-update-event" gridArea="content">
            <EventForm activities={activities} coordinators={groupedCoordinators} />
        </Box>
    );
}   