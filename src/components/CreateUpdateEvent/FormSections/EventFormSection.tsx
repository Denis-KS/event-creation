import React from "react";
import { Box } from "../../styled/Box/Box";
import { Text } from "../../styled/Text";

interface IEventFormSectionProps {
    title: string;
}

export const EventFormSection: React.FC<IEventFormSectionProps> = ({ title, children }) => {
    return (
        <Box>
            <Text>{title}</Text>
            {children}
        </Box>
    );
};