import { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";
import { useQueryParams } from "../util/useQueryParams";

export const LogInPage = () => {
  const [, setToken] = useToken();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [googleOauthUrl, setGoogleOauthUrl] = useState("");

  const history = useHistory();

  const { token: oauthToken } = useQueryParams();

  useEffect(() => {
    if (oauthToken) {
      setToken(oauthToken);
      history.push("/");
    }
  }, [oauthToken, setToken, history]);

  useEffect(() => {
    const loadOauthUrl = async () => {
      try {
        const response = await axios.get("auth/google/url");
        const { url } = response.data;
        setGoogleOauthUrl(url);
        console.log(googleOauthUrl);
      } catch (e) {
        console.log(e);
      }
    };

    loadOauthUrl();
  }, []);

  const OnLogInClicked = async () => {
    const response = await axios.post("/api/login", {
      email: emailValue,
      password: passwordValue,
    });

    const { token } = response.data;
    setToken(token);
    history.push("/");
  };

  return (
    <div className='content-container'>
      <h1>Log In</h1>
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

      <hr />

      <button disabled={!emailValue || !passwordValue} onClick={OnLogInClicked}>
        Log In
      </button>
      <button onClick={() => history.push("/forgot-password")}>
        Forgot your password?
      </button>
      <button onClick={() => history.push("/signup")}>
        Don't have an account? sign Up
      </button>

      <button
        disabled={!googleOauthUrl}
        onClick={() => (window.location.href = googleOauthUrl)}>
        Log in with Google
      </button>
    </div>
  );
};
