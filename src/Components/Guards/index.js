import { Navigate } from "react-router-dom";

export const Guard = ({
  user,
  children,
}) => {
  if (user) {
    return <Navigate to="/home" replace />;
  }

  return children;
};
