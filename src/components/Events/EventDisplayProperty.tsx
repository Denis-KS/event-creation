import React from "react";
import { FlexBox } from "../styled/Box/FlexBox";
import { Text } from "../styled/Text";

interface IEventDisplayPropertyProps {
    title: string;
    value: string | number;
    testId: string;
}

export const EventDisplayProperty: React.FC<IEventDisplayPropertyProps> = ({ title, value, testId }) => (
    <FlexBox data-testId={testId} justifyContent="space-between">
        <Text>{title}:</Text>
        <Text>{value}</Text>
    </FlexBox>
);