import React from "react";
import { useLocation } from "react-router"
import styled from "styled-components";
import { Box } from "../styled/Box/Box";
import { getTitleFromUrl } from "./header-helpers";


const HeaderWrapper = styled(Box)`
    display: inherit;
    grid-template-columns: inherit;
    grid-area: header;
    margin: 0 0 20px 0;
    position: relative;
    background-color: #35588e;
    max-width: 100%;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 10px;
        background-color: #1c3b68;
    }
`;

const HeaderText = styled.h3`
    grid-column: 2/3;
    margin: 0;
    padding: 10px 0 5px 0;
    color: #fff;
    font-size: 26px;
`;

export const Header: React.FC = () => {
    const { pathname } = useLocation();

    const headerText = getTitleFromUrl(pathname);

    return (
        <HeaderWrapper backgroundColor="#35588e">
            <HeaderText data-testid="header">{headerText}</HeaderText>
        </HeaderWrapper>
    );
}