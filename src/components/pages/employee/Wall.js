import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../context/Context";
import UserIdea from "../manager/user-idea/UserIdea";

const Wall = () => {
  const [refresh, setRefresh] = useState(false);
  const context = useContext(Context);
  useEffect(() => {
    const otherUsers = context.userList.filter(
      user => user.name !== "Naomi Carey"
    );
    console.log(otherUsers);
    otherUsers.map(user => {
      user.ideas.map(idea => {
        let newNotFavorite = [];
        (idea.totalLikes.includes("Naomi Carey") ||
          idea.totalDislikes.includes("Naomi Carey")) &&
          newNotFavorite.push(idea);
        user.ideas = newNotFavorite;
        context.setVoted(otherUsers);
      });
    });
    setRefresh(true)
  }, [refresh]);
  return (
    <div>
      {context.voted.map(
        idea =>
          idea.ideas.length > 0 && (
            <UserIdea
              key={idea.ideas[0].id}
              id={idea.ideas[0].id}
              name={idea.name}
              title={idea.ideas[0].title}
              question1={idea.ideas[0].question1}
              question2={idea.ideas[0].question2}
              question3={idea.ideas[0].question3}
              totalLikes={idea.ideas[0].totalLikes.length}
              created={idea.ideas[0].created}
              type={idea.ideas[0].totalLikes.includes("Naomi Carey") ? "up" : "down"}
            />
          )
      )}
    </div>
  );
};
export default Wall;