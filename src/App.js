import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Context } from "./context/Context";
import Burger from "./components/Navbar/Burger";
import Menu from "./components/Navbar/Menu";
import Spacer from "./components/Navbar/Spacer";
import Home from "./components/pages/Home";
import IdeasList from "./components/pages/manager/ideas-list/IdeasList";
import FavoriteList from "./components/pages/manager/favorite-ideas/FavoriteList";
import PeerIdea from "./components/pages/employee/PeerIdea";

const App = (props) => {
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
        <Route exact path="/" render={() => <Home {...props} />} />
        <Route path="/user/wall" render={() => <Home />} />
        <Route path="/user/swipe" render={() => <Home />} />
        <Route path="/user/myideas" render={() => <Home />} />
        <Route path="/user/newidea" component={PeerIdea} />
        <Route exact path="/manager" render={(props) => <IdeasList {...props} />} />
        <Route path="/manager/userprofile" render={(props) => <Home {...props}/>} />
        <Route path="/manager/favourites" render={(props) => <FavoriteList {...props}/>} />
      </Switch>
    </main>
  );
};

export default App;
