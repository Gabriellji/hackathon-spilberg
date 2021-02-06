import styled from 'styled-components'
import { FaRegHeart } from "react-icons/fa";
import "./style.css";

const IconWrap = styled.div`
display: ${p=>p.type==="fame" && "none"}
`

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
  type
}) => {
  return (
    <div className="idea_wrap">
      <h1 className="total-likes_title">{totalLikes} Upvote</h1>
      <div className="idea-inner_wrap">
        <IconWrap type={type} className="like_icon">
          <div className="icon-inner_wrap">
            <FaRegHeart id={id} onClick={(e) => onClick(e)}/>
          </div>
        </IconWrap>
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
