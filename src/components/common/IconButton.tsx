import React from "react";
import { Box } from "../styled/Box/Box";

interface IIconButtonProps {
    icon: string;
    // onClick: any;
    testId?: string;
}

export const IconButton: React.FC<IIconButtonProps> = ({ icon, testId }) => {
    return (
        <Box width="20px" height="20px" data-testid={testId}>
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d={icon} />
            </svg>
        </Box>
    );
}