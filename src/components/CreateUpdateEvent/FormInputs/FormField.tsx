import React from "react";
import styled from "styled-components";
import { Text } from "../../styled/Text";

interface IFormFieldProps {
    title: string;
}

const FormFieldGrid = styled.div`
    display: grid;
    grid-template-areas: 
        "label"
        "input"
        "error";
    grid-template-columns: 1fr;
`;

const FormFieldLabelArea = styled.div`
    grid-area: label;
`;

const FormFieldInputArea = styled.div`
    grid-area: input;
`;

const FormFieldErrorArea = styled.div`
    grid-area: error;
    color: #f4433f;
`;

const Label = styled.label`
    text-transform: uppercase;
`;

export const FormField: React.FC<IFormFieldProps> = ({ title, children }) => {
    return (
        <FormFieldGrid>
            <FormFieldLabelArea><Label>{title}</Label></FormFieldLabelArea>
            <FormFieldInputArea>{children}</FormFieldInputArea>
            <FormFieldErrorArea><Text>some error text</Text></FormFieldErrorArea>
        </FormFieldGrid>
    );
};
