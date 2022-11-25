import React from "react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";
import { useToken } from "../auth/useToken";
import { EmailVerificationFailed } from "./EmailVerificationFailed";
import { EmailVerificationSuccess } from "./EmailVerificationSuccess";

export const EmailVerificationLandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const { verificationString } = useParams();
  const [, setToken] = useToken();

  useEffect(() => {
    const loadVerification = async () => {
      try {
        const response = await axios.put("/api/verify-email", {
          verificationString,
        });

        console.log("jfaldflaskfsa");

        const { token } = response.data;
        setToken(token);
        setIsSuccess(true);
        setIsLoading(false);
      } catch (err) {
        setIsSuccess(false);
        setIsLoading(false);
      }
    };
    loadVerification();
  }, [setToken, verificationString]);

  if (isLoading) return <p>Loading....</p>;

  if (!isSuccess) return <EmailVerificationFailed />;

  return <EmailVerificationSuccess />;
};
