import React from "react";
import styled from 'styled-components';
import { theme } from "../../../../data/theme";

const StyledUserProfile = styled.div`
  padding: 8px;
  color: ${theme.color.orange};
  border: 2px solid ${theme.color.orange};
  border-radius: 9999px;
  background-color: ${theme.color.grey};
  cursor: pointer;
  transition: all 500ms;
  width: ${(p) =>
  p.width === "full"
    ? "100%"
    : "auto"};

  &:hover {
      background-color: ${theme.color.yellow};
      color: ${theme.color.purple};
      border: 2px solid ${theme.color.purple};
      transform: scale(1.05);
  }

  p {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
`;

const UserProfile = ({ id, name, position, onClick }) => {
  return (
    <StyledUserProfile id={id} onClick={(e) => onClick(e)}>
      <p id={id}>{name}</p>
      <p id={id}>{position}</p>
    </StyledUserProfile>
  );
};

export default UserProfile;
