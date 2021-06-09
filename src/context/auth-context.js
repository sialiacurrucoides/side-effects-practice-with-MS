import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: () => {},
});

export const AuthContextProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
      };
    
      const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
      };

      useEffect(() => {
        const storedUserLoggedInInfomation = localStorage.getItem('isLoggedIn');
        if (storedUserLoggedInInfomation === '1') setIsLoggedIn(true);
      }, []);

    return (<AuthContext.Provider value={{
        isLoggedIn: isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler
    }}>{children}</AuthContext.Provider>);
};

export default AuthContext;