import React from "react";
import { FormField } from "../FormInputs/FormField";
import { EventFormSection } from "./EventFormSection";

export const FormCoordinatorSection: React.FC = () => {
    return (
        <EventFormSection title="Coordinator">
            <FormField title="Responsible">
                <select data-testid="form-responsible" />
            </FormField>
            <FormField title="Email">
                <input data-testid="form-email" placeholder="Email" />
            </FormField>
        </EventFormSection>
    );
}