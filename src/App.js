import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Context } from "./context/Context";
import styled from 'styled-components';
import { theme } from "./data/theme";

// Top Buttons and Burger Menu
import TopBtn from "./components//Navbar//TopBtns"
import Burger from "./components/Navbar/Burger";
import Menu from "./components/Navbar/Menu"
import Spacer from "./components/Navbar/Spacer"

// Pages
import Home from "./components/pages/Home";
import IdeasList from "./components/pages/manager/ideas-list/IdeasList";
import FavoriteList from "./components/pages/manager/favorite-ideas/FavoriteList";
import NewIdea from "./components/pages/employee/NewIdea";
import EmployeeWall from "./components/pages/employee/EmployeeWall";
import EmployeeList from "./components/pages/manager/employee-list/EmployeeList";
// import PeerIdea from "./components/pages/employee/PeerIdea";

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

const App = (props) => {
  const context = useContext(Context);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <StyledTopBtnsSection>
      <TopBtn action={() => context.setIsAdmin(false)} text="Employee" />
      <TopBtn action={() => context.setIsAdmin(true)} text="Manager" />
      </StyledTopBtnsSection>
      <Burger modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Menu modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Spacer />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/user/wall" component={EmployeeWall} />
        <Route exact path="/user/swipe" render={() => <Home />} />
        <Route exact path="/user/myideas" render={() => <Home />} />
        <Route exact path="/user/newidea" component={NewIdea} />
        <Route exact path="/manager" render={(props) => <IdeasList {...props} />} />
        <Route path="/manager/userprofile" render={(props) => <EmployeeList {...props}/>} />
        <Route path="/manager/favourites" render={(props) => <FavoriteList {...props}/>} />
      </Switch>
    </main>
  );
};

export default App;
