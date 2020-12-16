import React from "react";
import { useLocation } from "react-router"
import { getTargetFromPath, headerTargetMap } from "./header-helpers";

export const Header: React.FC = () => {
    const { pathname } = useLocation();

    const headerText = headerTargetMap[getTargetFromPath(pathname)];

    return (
        <div data-testid="header">{headerText}</div>
    );
}