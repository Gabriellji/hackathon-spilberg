import React, { useState } from 'react';
import { user } from '../../../../data/data';

export const ManagerContext = React.createContext();

const ContextProvider = ({children}) => {
    const [state, setState] = useState('');

    const likeHandler = (e) => {
        let itemSelected = user.find(user => user.id === e.target.id);
        let copyOfItems = [...state];
        copyOfItems.push(itemSelected);
        setState(copyOfItems);
      };

    return (
        <ManagerContext.Provider value={{ state, setState, likeHandler }}>
            {children}
        </ManagerContext.Provider>
    )
}

export default ContextProvider;