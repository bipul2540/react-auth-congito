import React from "react";
import { useHistory } from "react-router-dom";

export const EmailVerificationSuccess = () => {
  const history = useHistory();
  return (
    <div className='content-container'>
      <h1>Success !</h1>
      <p>
        Thanks for verifying email, now you can use all the features of our
        website.
      </p>
      <button onClick={() => history.push("/")}>go to main page</button>
    </div>
  );
};
