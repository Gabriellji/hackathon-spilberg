import React, { useContext } from "react";
import styled from 'styled-components';
import { Context } from '../../../../context/Context';
import UserIdea from "../user-idea/UserIdea";

const StyledIdeasList = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 376px) {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(450px, 460px));
  }
`;

const IdeasList = (props) => {
  const { likeHandler, userList } = useContext(Context);
  return (
    <StyledIdeasList>
      {userList.map((idea) => (
        <UserIdea
        location={props.location.pathname}
          onClick={likeHandler}
          key={idea.ideas[0].id}
          id={idea.id}
          name={idea.name}
          title={idea.ideas[0].title}
          question1={idea.ideas[0].question1}
          question2={idea.ideas[0].question2}
          question3={idea.ideas[0].question3}
          totalLikes={idea.ideas[0].totalLikes.length}
          created={idea.ideas[0].created}
          type="list"
        />
      ))}
    </StyledIdeasList>
  );
};

export default IdeasList;
