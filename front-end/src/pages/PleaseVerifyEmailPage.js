import { useEffect } from "react";

import { useHistory } from "react-router-dom";

import React from "react";
import { useQueryParams } from "../util/useQueryParams";

export const PleaseVerifyEmailPage = () => {
  const history = useHistory();
  const { email } = useQueryParams();

  useEffect(() => {
    setTimeout(() => {
      history.push(`/verify-email?email=${encodeURIComponent(email)}`);
    }, 3000);
  }, [history, email]);

  return (
    <div className='content-container'>
      <h1>Thanks for Signing up</h1>
      <p>A verification email has been to the email provided by you. </p>
    </div>
  );
};
