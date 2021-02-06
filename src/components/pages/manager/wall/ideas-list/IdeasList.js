import { user } from "../../../../../data/data";
import UserIdea from "../user-idea/UserIdea";

const IdeasList = () => {
  return (
    <div>
      {user.map((idea) => (
        <UserIdea
          key={idea.ideas[0].id}
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
