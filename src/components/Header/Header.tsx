import React from "react";
import { useLocation } from "react-router"
import { getTitleFromUrl } from "./header-helpers";

export const Header: React.FC = () => {
    const { pathname } = useLocation();

    const headerText = getTitleFromUrl(pathname);

    return (
        <div data-testid="header">{headerText}</div>
    );
}