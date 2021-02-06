import ContextProvider from './context/ContextProvider';
import { Switch, Route } from "react-router-dom";
import Navbar from "./navigation/NavBar";
import IdeasList from "./wall/ideas-list/IdeasList";
import FavoriteList from "./wall/favorite-ideas/FavoriteList";

const Manager = () => {
  return (
    <ContextProvider>
      <h1>Im manager hohohoho</h1>
      <Navbar />
      <Switch>
        <Route exact path="/manager" component={IdeasList} />
        <Route path="/manager/favorites" component={FavoriteList} />
      </Switch>
    </ContextProvider>
  );
};

export default Manager;
