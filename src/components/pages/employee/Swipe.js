import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../context/Context";
import UserIdea from "../manager/user-idea/UserIdea";
import styled from "styled-components";

const StyledVoteTitle = styled.h1`
  width: 100%;
  text-align: center;
`;

const StyledVoteList = styled.div`
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

const Swipe = () => {
  const [refresh, setRefresh] = useState(false);
  const context = useContext(Context);

  const next = e => {
      context.ideasToVote.map(user =>
        user.ideas.map(
          idea =>
            idea.id === e.target.id && idea.totalDislikes.push("Naomi Carey")  
      )
    );
    setRefresh(!refresh);
  };
  const upvote = e => {
    context.ideasToVote.map(user =>
      user.ideas.map(
        idea =>
          idea.id === e.target.id && idea.totalLikes.push("Naomi Carey")  
    )
  );
  setRefresh(!refresh);
};
  useEffect(() => {
    const otherUsers = context.userList.filter(
      user => user.name !== "Naomi Carey"
    );
    // console.log(otherUsers);
    otherUsers.map(user => {
      user.ideas.map(idea => {
        let newNotFavorite = [];
        !idea.totalLikes.includes("Naomi Carey") &&
          !idea.totalDislikes.includes("Naomi Carey") &&
          newNotFavorite.push(idea);
        user.ideas = newNotFavorite;
        context.setIdeasToVote(otherUsers);
      });
    });
  }, [refresh]);
  return (
    <>
    <StyledVoteTitle>Vote IDEAs</StyledVoteTitle>
    <StyledVoteList>
      {context.ideasToVote.map(
        idea =>
          idea.ideas.length > 0 && (
            <UserIdea
              key={idea.ideas[0].id}
              id={idea.ideas[0].id}
              title={idea.ideas[0].title}
              question1={idea.ideas[0].question1}
              question2={idea.ideas[0].question2}
              question3={idea.ideas[0].question3}
              type="vote"
              next={next}
              vote={upvote}
            />
          )
      )}
    </StyledVoteList>
    </>
  );
};
export default Swipe;
