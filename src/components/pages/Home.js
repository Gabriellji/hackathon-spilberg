import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { bestIdeas } from "../../data/data";
import UserIdea from "./manager/user-idea/UserIdea";

const Home = () => 
<main>
    <h1>WALL OF FAME</h1>
    <h3>Best ideas brought up last month by our employees</h3>
    {bestIdeas.map(
        idea => <UserIdea
        key={idea.id}
        id={idea.id}
        name={idea.name}
        title={idea.title}
        question1={idea.question1}
        question2={idea.question2}
        question3={idea.question3}
        totalLikes={idea.totalLikes.length}
        created={idea.created}
        type="fame"
      />
    )}
</main>;

export default Home;
