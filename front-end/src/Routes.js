import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LogInPage } from "./pages/LogInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { UserInfoPage } from "./pages/UserInfoPage";

import { PrivatRoute } from "./auth/PrivateRoute";
import { PleaseVerifyEmailPage } from "./pages/PleaseVerifyEmailPage";
import { EmailVerificationLandingPage } from "./pages/EmailVerificationLandingPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";

import { PasswordResetLandingPage } from "./pages/PasswordResetLandingPage";

import { EmailVerificationPage } from "./pages/EmailVerificationPage";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivatRoute path='/' exact>
          <UserInfoPage />
        </PrivatRoute>

        <Route path='/verify-email' exact>
          <EmailVerificationPage />
        </Route>

        <Route path='/login'>
          <LogInPage />
        </Route>
        <Route path='/please-verify'>
          <PleaseVerifyEmailPage />
        </Route>

        <Route path='/signup'>
          <SignUpPage />
        </Route>
        <Route path='/forgot-password'>
          <ForgotPasswordPage />
        </Route>

        <Route path='/reset-password/'>
          <PasswordResetLandingPage />
        </Route>
      </Switch>
    </Router>
  );
};
