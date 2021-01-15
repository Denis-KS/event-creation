import styled from "styled-components";
import { Box } from "./Box";

export const AppContentGrid = styled(Box)`

    ${({ theme }) => `
        min-width: ${theme.breakpoints.iphone5};
        display: grid;
        grid-template-areas: 
            "header header header"
            ". content .";
        grid-template-columns: 5px minmax(calc(${theme.breakpoints.iphone5} - 10px), auto) 5px;

        @media screen and (min-width: ${theme.breakpoints.iphone5}) {
            grid-template-columns: 5px minmax(calc(${theme.breakpoints.iphone5} - 10px), auto) 5px;
        }

        @media screen and (min-width: ${theme.breakpoints.ipad}) {
            grid-template-columns: 1fr ${theme.breakpoints.ipad} 1fr;
        }
    `}
`;