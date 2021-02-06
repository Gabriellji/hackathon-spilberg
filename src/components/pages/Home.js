import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import { bestIdeas } from "../../data/data";
import UserIdea from "./manager/user-idea/UserIdea";

const FameContainer = styled.div`
width: 100vw;
height: 80vh;
display:flex;

div:nth-of-type(1){
    order:1
}
div:nth-of-type(2){

}
div:nth-of-type(3){
    order:2
}

`;

const Home = () => (
  <main>
    <h1>WALL OF FAME</h1>
    <h3>Best ideas brought up last month by our employees</h3>
    <FameContainer>
      {bestIdeas.map((idea, index) => (
        <UserIdea
          key={idea.id}
          id={idea.id}
          name={idea.name}
          title={idea.title}
          question1={idea.question1}
          question2={idea.question2}
          question3={idea.question3}
          totalLikes={idea.totalLikes.length}
          created={idea.created}
          rank={index}
        />
      ))}
    </FameContainer>
  </main>
);

export default Home;
