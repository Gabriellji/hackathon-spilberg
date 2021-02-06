import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../../../context/Context";
import UserIdea from "../manager/user-idea/UserIdea";

const StyledMyIdeasTitle = styled.h1`
  width: 100%;
  text-align: center;
`;

const StyledIdeaWrapper = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 376px) {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(450px, 460px));
  }
`;

const MyIdeas = () => {
  const context = useContext(Context);
  const [refresh, setRefresh] = useState(false)
  const [myBestIdeas, setMyBestIdeas] = useState([]);
  const remove = target => {
    const newUserList = context.userList
    newUserList[0].ideas = context.userList[0].ideas.filter(
      idea => idea.id !== target.id
    )
    context.setUserList(newUserList)
    setRefresh(!refresh)
  };
  useEffect(() => {
    setMyBestIdeas(
      context.userList[0].ideas.sort(
        (a, b) => b.totalLikes.length - a.totalLikes.length
      )
    );
  }, [myBestIdeas, refresh]);
  return (
    <>
      <StyledMyIdeasTitle>My IDEAs</StyledMyIdeasTitle>
      <StyledIdeaWrapper>
        {myBestIdeas.map(idea => (
          <UserIdea
            onClick={() => remove(idea)}
            key={idea.id}
            id={idea.id}
            name={context.userList[0].name}
            title={idea.title}
            question1={idea.question1}
            question2={idea.question2}
            question3={idea.question3}
            totalLikes={idea.totalLikes.length}
            created={idea.created}
            type="favorite"
          />
        ))}
      </StyledIdeaWrapper>
    </>
  );
};

export default MyIdeas;
