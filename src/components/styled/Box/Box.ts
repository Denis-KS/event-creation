import styled from "styled-components";
interface IBoxProps {
    padding?: string;
    margin?: string;
    backgroundColor?: string;
    width?: string;
    height?: string;
    maxWidth?: string;
    lineHeight?: number;
    position?: string;
    gridArea?: string;
}

export const Box = styled.div<IBoxProps>`
    grid-area: ${props => props.gridArea || 'initial'};
    padding: ${props => props.padding || 'initial'};
    margin: ${props => props.margin || 'initial'};
    background-color: ${props => props.backgroundColor || 'initial'};
    width: ${({ width } ) => width || 'initial'};
    height: ${({ height } ) => height || 'initial'};
    max-width: ${({ maxWidth } ) => maxWidth || 'initial'};
    line-height: ${({ lineHeight } ) => lineHeight || 'initial'};
    position: ${({ position } ) => position || 'initial'};
`;
