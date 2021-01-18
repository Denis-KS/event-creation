import React from "react";
import { Box } from "../../styled/Box/Box";
import { Text } from "../../styled/Text";
import { EventFormSection } from "./EventFormSection";

export const FormGeneralSection: React.FC = () => {
    return (
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
    );
}