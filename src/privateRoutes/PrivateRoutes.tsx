import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }: { children: ReactNode }) => {
  const loginUser = window.localStorage.getItem("loginUser");

  if (loginUser === "" || loginUser === null) {
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
};

export default PrivateRoutes;
