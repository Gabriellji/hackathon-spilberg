import React from "react";
import styled from 'styled-components';
import { theme } from "../../../../data/theme";

import TopBtn from "../../../../components/Navbar/TopBtns"

const StyledSearchPanel = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  input {
    width: 100%;
    border: 1px solid ${theme.color.orange};
    border-radius: 10px;
    line-height: 32px;
    padding: 4px;
  }

  @media (min-width: 376px){
    input {
      max-width: 500px;
    }
  }
`;

const SearchPanel = ({ onClick, value, onChange }) => (
  <StyledSearchPanel>
    <input
      onChange={(e) => onChange(e)}
      type="text"
      placeholder="Employee name ..."
      value={value}
    />
    <TopBtn action={(e) => onClick(e)} text="Search" />
  </StyledSearchPanel>
);

export default SearchPanel;
