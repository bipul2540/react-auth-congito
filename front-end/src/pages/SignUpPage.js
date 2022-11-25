import { useState } from "react";

import { useHistory } from "react-router-dom";
import { useToken } from "../auth/useToken";
import axios from "axios";

export const SignUpPage = () => {
  const [, setToken] = useToken();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [ConfirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const OnSignUpClicked = async () => {
    const response = await axios.post("/api/signup", {
      email: emailValue,
      password: passwordValue,
    });

    const { token } = response.data;
    setToken(token);
    history.push(`/please-verify?email=${encodeURIComponent(emailValue)}`);
  };

  return (
    <div className='content-container'>
      <h1>Sign Up</h1>
      {errorMessage && <div className='fail'>{errorMessage}</div>}
      <input
        type='text'
        placeholder='someone@gmail.com'
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <input
        type='password'
        placeholder='password'
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />

      <input
        type='password'
        placeholder='password'
        value={ConfirmPasswordValue}
        onChange={(e) => setConfirmPasswordValue(e.target.value)}
      />
      <hr />

      <button
        disabled={
          !emailValue ||
          !passwordValue ||
          !ConfirmPasswordValue ||
          passwordValue !== ConfirmPasswordValue
        }
        onClick={OnSignUpClicked}>
        Sign Up
      </button>
      <button onClick={() => history.push("/login")}>
        Already have an account? log In
      </button>
    </div>
  );
};
