import React, { useContext, useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: lightgreen;
  height: 100vh;
  width: auto;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 500ms;
  transform: translateX(-100%);
  transform: ${({ modalOpen }) => modalOpen ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: 375px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: red;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 375px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: purple;
    }
  }
`;

const Menu = ({ modalOpen, setModalOpen }) => {
  const context = useContext(Context);
  return (
    <StyledModal modalOpen={modalOpen}>
      {modalOpen && (
        <>
          <Link onClick={() => (context.scrollTop, setModalOpen(!modalOpen))} to="/">
            Home
        </Link>
          {context.admin ? (
            <>
              <Link onClick={() => (context.scrollTop, setModalOpen(!modalOpen))} to="/manager">
                Wall
              </Link>
              <Link onClick={() => (context.scrollTop, setModalOpen(!modalOpen))} to="/manager/favourites">
                Favourites
              </Link>
            </>
          ) : (
              <>
                <Link onClick={() => (context.scrollTop, setModalOpen(!modalOpen))} to="/user/wall">
                  Wall
              </Link>
                <Link onClick={() => (context.scrollTop, setModalOpen(!modalOpen))} to="/user/swipe">
                  Swipe
              </Link>
                <Link onClick={() => (context.scrollTop, setModalOpen(!modalOpen))} to="/user/myideas">
                  My Ideas
              </Link>
                <Link onClick={() => (context.scrollTop, setModalOpen(!modalOpen))} to="/user/newidea">
                  New Idea
              </Link>
              </>
            )}
        </>
      )}
    </StyledModal>
  )
}

export default Menu;