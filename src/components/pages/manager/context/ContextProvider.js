import React, { useState } from 'react';

export const ManagerContext = React.createContext();

const ContextProvider = ({children}) => {
    const [state, setState] = useState('');

    return (
        <ManagerContext.Provider value={{state, setState}}>
            {children}
        </ManagerContext.Provider>
    )
}

export default ContextProvider;