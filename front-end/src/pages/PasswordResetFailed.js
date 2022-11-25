import React from "react";
import { useHistory } from "react-router-dom";

export const PasswordResetFailed = () => {
  const history = useHistory();
  return (
    <div className='content-container'>
      <h1>Uh oh... !</h1>
      <p>Some thing went wrong while trying to Reset your password</p>
      <button onClick={() => history.push("/login")}>Back to Log in</button>
    </div>
  );
};
