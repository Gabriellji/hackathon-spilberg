import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Context } from "./context/Context";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar/Navbar";
import IdeasList from "./components/pages/manager/ideas-list/IdeasList";
import FavoriteList from "./components/pages/manager/favorite-ideas/FavoriteList";
import NewIdea from "./components/pages/employee/NewIdea";
import EmployeeWall from "./components/pages/employee/EmployeeWall";
// import PeerIdea from "./components/pages/employee/PeerIdea";

const App = () => {
  const context = useContext(Context);
  const [open, setOpen] = useState(false);

  return (
    <main>
      <button onClick={() => context.setIsAdmin(false)}>Employee</button>
      <button onClick={() => context.setIsAdmin(true)}>Manager</button>
      <Navbar />

      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/user/wall" component={EmployeeWall} />
        <Route exact path="/user/swipe" render={() => <Home />} />
        <Route exact path="/user/myideas" render={() => <Home />} />
        <Route exact path="/user/newidea" component={NewIdea} />
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
