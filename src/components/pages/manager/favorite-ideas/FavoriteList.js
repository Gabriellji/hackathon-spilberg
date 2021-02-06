import React, { useContext } from "react";
import styled from 'styled-components';
import { Context } from '../../../../context/Context';
import UserIdea from "../user-idea/UserIdea";
import { FcNoIdea } from 'react-icons/fc';

const StyledFavListTitle = styled.h1`
  width: 100%;
  text-align: center;
`;

const StyledFavoriteList = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 376px) {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(450px, 460px));
  }
`;

const StyledNoIdea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  svg {
    width: 50px;
    height: 50px;
  }
`;

const FavoriteList = () => {
  const { state, trashHandler } = useContext(Context);

  return (
    <>
      <StyledFavListTitle>Favorites List</StyledFavListTitle>
      <StyledFavoriteList>
        {state.length ? (state.map((idea) => (
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
            type="favorite"
          />
        ))) : (
            <StyledNoIdea>
              <FcNoIdea />
              <h3>No IDEAs here, got to Employees IDEAs page!</h3>
            </StyledNoIdea>)}
      </StyledFavoriteList>
    </>
  );
};

export default FavoriteList;
