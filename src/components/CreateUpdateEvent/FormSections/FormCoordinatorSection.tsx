import React from "react";
import { Box } from "../../styled/Box/Box";
import { EventFormSection } from "./EventFormSection";

export const FormCoordinatorSection: React.FC = () => {
    return (
        <EventFormSection title="Coordinator">
            <Box>
                <label>Responsible<select data-testid="form-responsible" /></label>
            </Box>
            <Box>
                <label>Email<input data-testid="form-email" placeholder="Email" /></label>
            </Box>
        </EventFormSection>
    );
}