import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Context } from "./context/Context";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { theme } from "./data/theme";

// Top Buttons and Burger Menu
import TopBtn from "./components//Navbar//TopBtns";
import Burger from "./components/Navbar/Burger";
import Menu from "./components/Navbar/Menu";
import Spacer from "./components/Navbar/Spacer";

// Pages
import Home from "./components/pages/Home";
import IdeasList from "./components/pages/manager/ideas-list/IdeasList";
import FavoriteList from "./components/pages/manager/favorite-ideas/FavoriteList";
import NewIdea from "./components/pages/employee/NewIdea";
import Wall from "./components/pages/employee/Wall";
import EmployeeList from "./components/pages/manager/employee-list/EmployeeList";
import MyIdeas from "./components/pages/employee/MyIdeas";
import Swipe from './components/pages/employee/Swipe'
// import PeerIdea from "./components/pages/employee/PeerIdea";

const StyledSuperText = styled.p`
  width: 100%;
  padding: 2px;
  text-align: right;
  font-size: 18px;
  color: white;
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 3;
`;

const StyledTopBtnsSection = styled.div`
  width: 100vw;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;

  @media (min-width: 376px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const App = props => {
  const context = useContext(Context);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {context.admin
        ? <StyledSuperText>Mario Rossi (Manager)</StyledSuperText>
        : <StyledSuperText>Naomi Carey (Employee)</StyledSuperText>
      }
      <StyledTopBtnsSection>
        <Link to="/"><TopBtn action={() => context.setIsAdmin(true)} text="Manager" /></Link>
        <Link to="/"><TopBtn action={() => context.setIsAdmin(false)} text="Employee" /></Link>
      </StyledTopBtnsSection>
      <Burger modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Menu modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Spacer />
      <Switch>
        <Route exact path="/" render={() => <Home {...props}/>} />
        <Route exact path="/user/wall" component={Wall} />
        <Route exact path="/user/swipe" component={Swipe} />
        <Route exact path="/user/myideas" component={MyIdeas} />
        <Route exact path="/user/newidea" component={NewIdea} />
        <Route
          exact
          path="/manager"
          render={props => <IdeasList {...props} />}
        />
        <Route
          path="/manager/userprofile"
          render={props => <EmployeeList {...props} />}
        />
        <Route
          path="/manager/favourites"
          render={props => <FavoriteList {...props} />}
        />
      </Switch>
    </>
  );
};

export default App;
