import React from "react";
import styled from 'styled-components';
import { theme } from "../../data/theme";

export const StyledTopBtn = styled.button`
    padding: 8px;
    font-size: 18px;
    font-weight: bold;
    color: ${theme.color.orange};
    border: 2px solid ${theme.color.orange};
    border-radius: 9999px;
    background-color: none;
    cursor: pointer;
    transition: all 500ms;

    &:hover {
        background-color: ${theme.color.yellow};
        color: ${theme.color.purple};
        border: 2px solid ${theme.color.purple};
    }
`;

const TopBtn = ({ action, text }) => (
    <StyledTopBtn onClick={action}>{text}</StyledTopBtn>
)

export default TopBtn;