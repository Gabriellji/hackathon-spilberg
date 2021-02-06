import React, { useContext } from "react";
import { ManagerContext } from "../../context/ContextProvider";
import UserIdea from "../user-idea/UserIdea";

const FavoriteList = () => {
  const { state, trashHandler } = useContext(ManagerContext);

  return (
    <>
      <h1>Favorite List</h1>
      <div>
        {state.length && state.map((idea) => (
          <UserIdea
            onClick={trashHandler}
            key={idea.ideas[0].id}
            id={idea.id}
            name={idea.name}
            title={idea.ideas[0].title}
            question1={idea.ideas[0].question1}
            question2={idea.ideas[0].question2}
            question3={idea.ideas[0].question3}
            totalLikes={idea.ideas[0].totalLikes.length}
            created={idea.ideas[0].created}
          />
        ))}
      </div>
    </>
  );
};

export default FavoriteList;
