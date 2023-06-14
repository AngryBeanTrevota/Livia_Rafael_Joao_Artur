import { useContext } from "react";
import {AuthContext}  from "./AuthContext";
import Login from "../../pages/telaLogin";

export const RequireAuthStudent = ({ children }) => {
  const auth = useContext(AuthContext);

  if(auth.user && auth.user.is_student ) {
    return children;
  }
  else {
    return <Login />;
  }
};
