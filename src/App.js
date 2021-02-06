import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Context } from "./context/Context";
import Burger from "./components/Navbar/Burger";
import Menu from "./components/Navbar/Menu"
import Spacer from "./components/Navbar/Spacer"
import Home from "./components/pages/Home";
import IdeasList from "./components/pages/manager/ideas-list/IdeasList";
import FavoriteList from "./components/pages/manager/favorite-ideas/FavoriteList";
import PeerIdea from "./components/pages/employee/PeerIdea";

const App = () => {
  const context = useContext(Context);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main>
      <button onClick={() => context.setIsAdmin(false)}>Employee</button>
      <button onClick={() => context.setIsAdmin(true)}>Manager</button>
      <Burger modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Menu modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Spacer />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/user/wall" render={() => <Home />} />
        <Route exact path="/user/swipe" render={() => <Home />} />
        <Route exact path="/user/myideas" render={() => <Home />} />
        <Route exact path="/user/newidea" component={PeerIdea} />
        <Route exact path="/manager/" render={() => <IdeasList />} />
        <Route exact path="/manager/userprofile" render={() => <Home />} />
        <Route
          exact
          path="/manager/favourites"
          render={() => <FavoriteList />}
        />
      </Switch>
    </main>
  );
};

export default App;
