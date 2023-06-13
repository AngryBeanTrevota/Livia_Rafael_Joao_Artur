import { useContext } from "react";
import {AuthContext}  from "./AuthContext";
import LoginAdm from "../../pages/LoginAdm";

export const RequireAuthAdmin = ({ children }) => {
  const auth = useContext(AuthContext);

  if(auth.user && !auth.user.is_student ) {
    return children;
  }
  else {
    return <LoginAdm />;
  }
};
