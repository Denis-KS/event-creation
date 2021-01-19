import React from "react";
import { Box } from "../../styled/Box/Box";
import { Text } from "../../styled/Text";
import { FormField } from "../FormInputs/FormField";
import { EventFormSection } from "./EventFormSection";

export const FormGeneralSection: React.FC = () => {
    return (
        <EventFormSection title="About">
            <FormField title="Title">
                <input data-testid="form-title" placeholder="Make it short and clear" />
            </FormField>
            <FormField title="Description">
                <textarea data-testid="form-description" placeholder="Write about your event, be creative" />
                <Text>Max characters length</Text><Text data-testid="form-description-char-count"></Text>
            </FormField>
            <FormField title="Category">
                <select data-testid="form-category" />
            </FormField>
            <FormField title="Payment">
                <Box data-testid="form-payment" />
            </FormField>
            <FormField title="Reward">
                <input data-testid="form-reward" placeholder="Number" />
                <Text>reward points for attendance</Text>
            </FormField>
        </EventFormSection>
    );
}