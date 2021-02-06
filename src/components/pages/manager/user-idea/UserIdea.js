import { FaRegHeart } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import "./style.css";

const UserIdea = ({
  id,
  name,
  title,
  question1,
  question2,
  question3,
  totalLikes,
  created,
  onClick,
  location
}) => {
  return (
    <div className="idea_wrap">
      <h1 className="total-likes_title">{totalLikes} Upvote</h1>
      <div className="idea-inner_wrap">
        <div className="like_icon">
          <div className="icon-inner_wrap">
          {location === '/manager' ? <FaRegHeart id={id} onClick={(e) => onClick(e)}/>
          : <FaRegTrashAlt id={id} onClick={(e) => onClick(e)}/>
          }
            {/* <FaRegHeart id={id} onClick={(e) => onClick(e)}/> */}
          </div>
        </div>
        <h3>{title}</h3>
        <p>
          <span>Problem:</span>
          {question1}
        </p>
        <p>
          <span>Idea:</span>
          {question2}
        </p>
        <p>
          <span>Location of problem:</span>
          {question3}
        </p>
      </div>
      <p>
        Submitted by {name} at {created}
      </p>
    </div>
  );
};

export default UserIdea;
