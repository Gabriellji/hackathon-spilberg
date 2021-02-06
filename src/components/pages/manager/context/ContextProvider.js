import React, { useState } from "react";
import { user } from "../../../../data/data";

export const ManagerContext = React.createContext();

const ContextProvider = ({ children }) => {
  const newList = user;
  const [userList, setUserList] = useState(newList);
  const [state, setState] = useState("");

  const likeHandler = (e) => {
    console.log(e.target);
    let itemSelected = user.find((user) => user.id === e.target.id);
    let copyOfItems = [...state];
    copyOfItems.push(itemSelected);
    setState(copyOfItems);
    const idx = userList.indexOf(itemSelected);
    userList.splice(idx, 1);
  };

  return (
    <ManagerContext.Provider
      value={{ state, setState, likeHandler, userList, setUserList }}
    >
      {children}
    </ManagerContext.Provider>
  );
};

export default ContextProvider;
