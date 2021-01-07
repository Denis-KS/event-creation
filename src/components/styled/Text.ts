import styled from "styled-components";

interface ITextProps {
    weight?: string;
    size?: string;
    color?: string;
    padding?: string;
}

export const Text = styled.span<ITextProps>`
    font-weight: ${props => props.weight || 'initial'};
    font-size: ${props => props.size || 'initial'};
    color: ${props => props.color || 'initial'};
    padding: ${props => props.padding || 'initial'};
`;
