import React, { useContext } from "react";
import { Context } from '../../../../context/Context';
import UserIdea from "../user-idea/UserIdea";

const IdeasList = (props) => {
  console.log(props)
  const { likeHandler, userList } = useContext(Context);

  return (
    <div>
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
        />
      ))}
    </div>
  );
};

export default IdeasList;
