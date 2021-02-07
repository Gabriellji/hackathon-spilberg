import styled from "styled-components";
import { theme } from "../../../../data/theme";
import { FaRegHeart } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { GiPodiumSecond } from "react-icons/gi";
import { GiPodiumThird } from "react-icons/gi";
import { FcNext } from "react-icons/fc";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";

const StyledUserIdea = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 2px solid ${theme.color.orange};
  border-radius: 10px;
  transition: all 500ms;

  @media (min-width: 376px) {
    &:hover {
      background-color: ${theme.color.yellow};
    }
  }
`;

const StyledUpvotes = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  color: ${theme.color.green};
  text-align: right;
`;

const StyledIdeaTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.color.purple};

  svg {
    width: 32px;
    height: 32px;
    color: ${theme.color.orange};
    cursor: pointer;
    transition: all 500ms;

    &:hover {
      color: ${theme.color.purple};
      transform: scale(1.2);
    }
  }
`;

const StyledText = styled.p`
  font-size: 18px;
  width: 100%;
  text-align: justify;

  p {
    font-weight: bold;
    color: ${theme.color.orange};
  }
`;

const StyledTextLittle = styled.p`
  font-size: 16px;
  font-style: italic;
  color: ${theme.color.orange};
  width: 100%;
  text-align: right;
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
  rank,
  next,
  vote,
}) => {
  return (
    <StyledUserIdea>
      {type !== "vote" && (
        <StyledUpvotes>
          {totalLikes} {totalLikes <= 1 ? "Like" : "Likes"}
        </StyledUpvotes>
      )}
      <StyledIdeaTitle type={type}>
        <h3>{title}</h3>
        {type === "list" && <FaRegHeart id={id} onClick={e => onClick(e)} />}
        {type === "favorite" && (
          <FaTrashAlt id={id} onClick={e => onClick(e)} />
        )}
        {rank === 0 && <GiPodiumWinner />}
        {rank === 1 && <GiPodiumSecond />}
        {rank === 2 && <GiPodiumThird />}
        {type === "up" && <FaThumbsUp />}
        {type === "down" && <FaThumbsDown />}
      </StyledIdeaTitle>
      <StyledText>
        <p>Problem:</p>
        {question1}
      </StyledText>
      <StyledText>
        <p>IDEA:</p>
        {question2}
      </StyledText>
      <StyledText>
        <p>Location of problem:</p>
        {question3}
      </StyledText>
      {type !== "vote" && (
        <StyledTextLittle>
          Submitted by {name} at {created}
        </StyledTextLittle>
      )}
      {type === "vote" && (
        <div>
          <button id={id} onClick={vote}>upvote</button>
          <button id={id} onClick={e => next(e)}>
            next
          </button>
        </div>
      )}
    </StyledUserIdea>
  );
};

export default UserIdea;
