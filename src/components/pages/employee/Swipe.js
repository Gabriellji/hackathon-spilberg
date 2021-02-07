import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../context/Context";
import UserIdea from "../manager/user-idea/UserIdea";

const Swipe = () => {
  const [refresh, setRefresh] = useState(false);
  const context = useContext(Context);
  const next = e => {
    /*   console.log(e.target.id)
      context.ideasToVote.map(user=>user.ideas.map((idea,=>idea.id==e.target.id && users.ideas[index].upshift)) */
  };
  useEffect(() => {
    const otherUsers = context.userList.filter(
      user => user.name !== "Naomi Carey"
    );
    console.log(otherUsers);
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
    <div>
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
            />
          )
      )}
    </div>
  );
};
export default Swipe;
