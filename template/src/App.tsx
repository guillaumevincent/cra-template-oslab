import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import SignInPage from "./auth/SignInPage";
import RegisterPage from "./auth/RegisterPage";
import ResetPasswordPage from "./auth/ResetPasswordPage";
import PrivacyPolicyPage from "./auth/PrivacyPolicyPage";
import UserAgreementPage from "./auth/UserAgreementPage";
import ResetPasswordConfirmPage from "./auth/ResetPasswordConfirmPage";

export default function App() {
  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route path="/sign-in" component={SignInPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/reset-your-password" component={ResetPasswordPage} />
      <Route path="/reset-password-confirm" component={ResetPasswordConfirmPage} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/user-agreement" component={UserAgreementPage} />
    </>
  );
}
