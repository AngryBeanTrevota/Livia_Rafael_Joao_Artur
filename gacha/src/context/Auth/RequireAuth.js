import { useContext } from "react";
import {AuthContext}  from "./AuthContext";
import Login from "../../pages/telaLogin";

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Login />;
  } else {
    return children;
  }
};
