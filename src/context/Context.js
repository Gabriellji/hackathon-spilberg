import React, { useState } from "react";

export const Context = React.createContext();

const Provider = ({ children }) => {
  const [admin, setIsAdmin] = useState(false)

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Context.Provider
      value={{
        admin,
        setIsAdmin,
        scrollTop
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
