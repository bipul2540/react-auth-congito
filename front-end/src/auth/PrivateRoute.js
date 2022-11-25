import { Redirect, Route } from "react-router-dom";
import { useUser } from "./useUser";

export const PrivatRoute = (props) => {
  const user = useUser();

  if (!user) return <Redirect to='login' />;

  //   else part
  return <Route {...props} />;
};
