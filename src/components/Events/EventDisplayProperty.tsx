import React from "react";
import { FlexBox } from "../styled/Box/FlexBox";
import { Text } from "../styled/Text";

interface IEventDisplayPropertyProps {
    title: string;
    value: string | number;
    testId: string;
}

export const EventDisplayProperty: React.FC<IEventDisplayPropertyProps> = ({ title, value, testId }) => (
    <FlexBox data-testid={testId}>
        <Text weight='bold' size='12px'>{title}:</Text>
        <Text size='12px' padding="0 0 0 5px">{value}</Text>
    </FlexBox>
);