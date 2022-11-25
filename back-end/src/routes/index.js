import { testRoute } from "./testRoute";
import { signUpRoute } from "./signUpRoute";
import { loginRoute } from "./loginRoute";
import { updateUserInfo } from "./updataUserInfo";
import { verifyEmailRoute } from "./verifyEmailRoute";
import { forgotPasswordRoute } from "./forgotPasswordRoute";
import { resetPasswordRoute } from "./resetPasswordRoute";
import { getGoogleOauthUrlRoute } from "./getGoogleOauthUrlRoute";

import { googleOauthCallbackRoute } from "./googelOauthCallbackRoute";

export const routes = [
  testRoute,
  signUpRoute,
  loginRoute,
  updateUserInfo,
  verifyEmailRoute,
  forgotPasswordRoute,
  resetPasswordRoute,
  getGoogleOauthUrlRoute,
  googleOauthCallbackRoute,
];
