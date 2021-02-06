import styled from 'styled-components';
import { theme } from '../../../../data/theme';
import { FaRegHeart } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const StyledUserIdea = styled.div`
  padding: 8px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${theme.color.orange};
  border-radius: 10px;
`;


const IconWrap = styled.div`
display: ${(p) => p.type === "fame" && "none"};
`;

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
  location
}) => {
  return (
    <StyledUserIdea>
      <h1 className="total-likes_title">{totalLikes} Upvote</h1>
      <div className="idea-inner_wrap">
        <IconWrap type={type} className="like_icon">
          <div className="icon-inner_wrap">
            {location === '/manager' ? <FaRegHeart id={id} onClick={(e) => onClick(e)} />
              : <FaRegTrashAlt id={id} onClick={(e) => onClick(e)} />
            }
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
    </StyledUserIdea>
  );
};

export default UserIdea;
