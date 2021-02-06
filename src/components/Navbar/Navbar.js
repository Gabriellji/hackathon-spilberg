import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { theme } from "../../data/theme";

const NavbarContainer = styled.div`
  width: 100vw;
  height: ${theme.navbar.height};
  background-color: red;
  display: flex;
`;
const Burger = styled.button`
  height: ${theme.navbar.height};
  width: ${theme.navbar.height};
  background-color: blue;
  display:block;
  @media (min-width: 768px) {
    display:none
  }
`;
const StyledNavbar = styled.div`
  height: ${theme.navbar.height};
  background-color: green;
  display: none;
  @media (min-width: 768px) {
    display:block
  }
`;
const StyledModal = styled.div`
  background-color: yellow;
  width: 100vw;
  height: 100vh;
  position:absolute;
  z-index: 1;
`;
const Navbar = () => {
  const context = useContext(Context);
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);
  return (
    <NavbarContainer>
      {modalOpen && (
        <StyledModal>
          <Burger onClick={toggleModal}>X</Burger>
          <Link onClick={() => context.scrollTop} to="/">
            Home
          </Link>
          {context.admin ? (
            <>
              <Link onClick={() => context.scrollTop} to="/manager">
                Wall
              </Link>
              <Link onClick={() => context.scrollTop} to="/manager/favourites">
                Favourites
              </Link>
            </>
          ) : (
            <>
              <Link onClick={() => context.scrollTop} to="/user/wall">
                Wall
              </Link>
              <Link onClick={() => context.scrollTop} to="/user/swipe">
                Swipe
              </Link>
              <Link onClick={() => context.scrollTop} to="/user/myideas">
                My Ideas
              </Link>
              <Link onClick={() => context.scrollTop} to="/user/newidea">
                New Idea
              </Link>
            </>
          )}
        </StyledModal>
      )}
      <Burger onClick={toggleModal}>=</Burger>
      <StyledNavbar>
        <Link onClick={() => context.scrollTop} to="/">
          Home
        </Link>
        {context.admin ? (
          <>
            <Link onClick={() => context.scrollTop} to="/manager">
              Wall
            </Link>
            <Link onClick={() => context.scrollTop} to="/manager/favourites">
              Favourites
            </Link>
          </>
        ) : (
          <>
            <Link onClick={() => context.scrollTop} to="/user/wall">
              Wall
            </Link>
            <Link onClick={() => context.scrollTop} to="/user/swipe">
              Swipe
            </Link>
            <Link onClick={() => context.scrollTop} to="/user/myideas">
              My Ideas
            </Link>
            <Link onClick={() => context.scrollTop} to="/user/newidea">
              New Idea
            </Link>
          </>
        )}
      </StyledNavbar>
    </NavbarContainer>
  );
};

export default Navbar;
