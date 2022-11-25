import { useState } from "react";
import axios from "axios";

import { EmailVerificationSuccess } from "./EmailVerificationSuccess";
import { EmailVerificationFailed } from "./EmailVerificationFailed";
import { useToken } from "./../auth/useToken";
import { useQueryParams } from "./../util/useQueryParams";

export const EmailVerificationPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const [verificationString, setVerificationString] = useState("");

  const { email } = useQueryParams();

  const [, setTokne] = useToken();

  const onSubmitVerificationString = async () => {
    try {
      const response = await axios.put("/api/verify-email", {
        email,
        verificationString,
      });

      const { token } = response.data;
      setTokne(token);
      setIsSuccess(true);
    } catch (e) {
      setIsFailed(true);
    }
  };

  if (isSuccess) return <EmailVerificationSuccess />;

  if (isFailed) return <EmailVerificationFailed />;

  return (
    <div className='content-container'>
      <h1>Please Verify Your Emial</h1>
      <p>
        You should have received verification code at the email address your
        provided to us.
      </p>

      <input
        type='text'
        placeholder='e.g 123456'
        value={verificationString}
        onChange={(e) => setVerificationString(e.target.value)}
      />

      <button onClick={onSubmitVerificationString}>Submit</button>
    </div>
  );
};
