import { isEmpty } from "lodash";
import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Box } from "../styled/Box/Box";

interface ISearchInputProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onErase: () => void;
    value: string;
}

const Input = styled.input`
    padding: 0 15px 0 0;
`;

const EraseButton = styled.button`
    position: absolute;
    background: none;
    border: none;
    top: 4px;
    right: 0px;
`;

export const SearchInput: React.FC<ISearchInputProps> = ({ onChange, onErase, value }) => {
    return (
        <Box position="relative">
            <Input data-testid="search-input" onChange={onChange} value={value} placeholder="Search..."/>
            {!isEmpty(value) && <EraseButton onClick={onErase} data-testid="erase-search-btn">x</EraseButton>}
        </Box>
    );
}