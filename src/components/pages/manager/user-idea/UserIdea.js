import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { GiPodiumSecond } from "react-icons/gi";
import { GiPodiumThird } from "react-icons/gi";
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
  type,
  rank,
}) => {
  return (
    <div className="idea_wrap">
      <h1 className="total-likes_title">{totalLikes} Upvote</h1>
      <div className="idea-inner_wrap">
        <div type={type} className="like_icon">
          <div className="icon-inner_wrap">
            {type === "list" && (
              <FaRegHeart id={id} onClick={e => onClick(e)} />
            )}
            {type === "favorite" && (
              <FaTrashAlt id={id} onClick={e => onClick(e)} />
            )}
            {rank == 0 && <GiPodiumWinner />}
            {rank == 1 && <GiPodiumSecond />}
            {rank == 2 && <GiPodiumThird />}
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
