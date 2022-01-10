import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SignInPage from "./auth/SignInPage";
import RegisterPage from "./auth/RegisterPage";
import ResetPasswordPage from "./auth/ResetPasswordPage";
import PrivacyPolicyPage from "./auth/PrivacyPolicyPage";
import UserAgreementPage from "./auth/UserAgreementPage";
import ResetPasswordConfirmPage from "./auth/ResetPasswordConfirmPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/reset-your-password" element={<ResetPasswordPage />} />
      <Route
        path="/reset-password-confirm"
        element={<ResetPasswordConfirmPage />}
      />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/user-agreement" element={<UserAgreementPage />} />
    </Routes>
  );
}
