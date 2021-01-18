import React from "react";
import { Box } from "../../styled/Box/Box";
import { Text } from "../../styled/Text";
import { EventFormSection } from "./EventFormSection";

export const FormDateSection: React.FC = () => {
    return (
        <EventFormSection title="When">
            <Box>
                <label>Starts On
                    <input data-testid="form-date" type="date" />
                    <input data-testid="form-time" type="time"></input>
                    <Box data-testid="form-timePeriod">
                        <label><input type="radio" />AM</label>
                        <label><input type="radio" />PM</label>
                    </Box>
                </label>
            </Box>
            <Box>
                <label>Duration<input data-testid="form-duration" placeholder="Number" /></label>
                <Text>hour(s)</Text>
            </Box>
        </EventFormSection>
    );
}