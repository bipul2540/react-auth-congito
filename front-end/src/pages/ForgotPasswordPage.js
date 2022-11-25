import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const ForgotPasswordPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const history = useHistory();

  const onSubmitClicked = async () => {
    try {
      await axios.put(`/api/forgot-password/${emailValue}`);
      setSuccess(true);

      setTimeout(() => {
        history.push(
          `/reset-password?email=${encodeURIComponent(emailValue)}`
        );
      }, 3000);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  return success ? (
    <div className='content-container'>
      <h1>Success</h1>
      <p>check your email for reset link</p>
    </div>
  ) : (
    <div className='content__contaienr'>
      <h1>Forgot Password</h1>
      <p>Enter your email and we'll send you a reset link</p>

      {errorMessage && <div className='fail'> {errorMessage} </div>}

      <input
        type='text'
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        placeholder='someone@gmail.com'
      />

      <button disabled={!emailValue} onClick={onSubmitClicked}>
        Send Reset Link
      </button>
    </div>
  );
};
