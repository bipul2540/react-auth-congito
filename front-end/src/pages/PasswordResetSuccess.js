import React from "react";
import { useHistory } from "react-router-dom";

export const PasswordResetSuccess = () => {
  const history = useHistory();
  return (
    <div className='content-container'>
      <h1>Success !</h1>
      <p>Your password have been, now please login with your new Password</p>
      <button onClick={() => history.push("/login")}>Back to Log-in</button>
    </div>
  );
};
