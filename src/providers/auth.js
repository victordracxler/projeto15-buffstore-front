
import React, { useState } from "react";
import { createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [token, setToken] = useState("")
  const [username, setUsername] = useState("visitante")
  const [sessionUserID, setSessionUserID] = useState("")

  return (
    <AuthContext.Provider value={
      {token, 
      setToken,
      username,
      setUsername,
      sessionUserID,
      setSessionUserID
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);