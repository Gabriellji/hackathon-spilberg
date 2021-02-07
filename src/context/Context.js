import React, { useState, useEffect } from "react";
import { user } from "../data/data.js";

export const Context = React.createContext();

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    fetch("http://localhost:5000/employee/users", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  const [admin, setIsAdmin] = useState(false);
  const newList = user;
  const [userList, setUserList] = useState(newList);
  const [state, setState] = useState("");
  const likeHandler = (e) => {
    let itemSelected = userList.find((user) => user.id === e.target.id);

    let copyOfItems = [...state];
    copyOfItems.push(itemSelected);
    setState(copyOfItems);
    const idx = userList.indexOf(itemSelected);
    userList.splice(idx, 1);
    console.log(state);
  };
  const trashHandler = (e) => {
    let element = state.find((el) => el.id === e.target.id);
    const index = state.indexOf(element);

    let copyOfItems = [...state];
    copyOfItems.splice(index, 1);
    setState(copyOfItems);
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Context.Provider
      value={{
        data,
        admin,
        setIsAdmin,
        scrollTop,
        state,
        setState,
        likeHandler,
        userList,
        setUserList,
        trashHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
