import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../../../context/Context";
import UserIdea from "../manager/user-idea/UserIdea";

const IdeaWrapper = styled.div``;
const MyIdeas = () => {
  const context = useContext(Context);
  const [myBestIdeas, setMyBestIdeas] = useState([]);
  useEffect(() => {
    setMyBestIdeas(
      context.userList[0].ideas.sort(
        (a, b) => b.totalLikes.length - a.totalLikes.length
      )
    );
  }, [myBestIdeas]);
  return (
    <>
      <h1>my contributions</h1>
      <IdeaWrapper>
        {myBestIdeas.map(idea => (
          <UserIdea
            /*               onClick={likeHandler} */
            key={idea.id}
            id={idea.id}
            name={idea.name}
            title={idea.title}
            question1={idea.question1}
            question2={idea.question2}
            question3={idea.question3}
            totalLikes={idea.totalLikes.length}
            created={idea.created}
          />
        ))}
      </IdeaWrapper>
    </>
  );
};

export default MyIdeas;
