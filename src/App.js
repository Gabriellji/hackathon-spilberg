import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Context } from "./context/Context";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Manager from "./components/pages/manager/Manager";
import Employee from "./components/pages/employee/Employee";
import PeerIdea from "./components/pages/PeerIdea";

const App = () => {
  const context = useContext(Context);

  useEffect(() => {
    console.log("placeholder");
  }, []);

  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/manager" component={Manager} />
        <Route path="/employee" component={Employee} />
      </Switch>
      <PeerIdea />
    </main>
  );
};

export default App;
