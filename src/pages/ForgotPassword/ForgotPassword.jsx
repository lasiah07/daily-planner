import "./ForgotPassword.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/AuthLayout/AuthLayout";

import { resetPassword } from "../../services/authService";

import {
  RiMailLine,
} from "react-icons/ri";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleResetPassword =
    async () => {
      if (!email.trim()) {
        alert(
          "Masukkan email terlebih dahulu."
        );
        return;
      }

      try {
        setLoading(true);

        await resetPassword(email);

        alert(
          "Link reset password telah dikirim ke email kamu."
        );

        navigate("/login");
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert(
              "Email belum terdaftar."
            );
            break;

          case "auth/invalid-email":
            alert(
              "Format email tidak valid."
            );
            break;

          default:
            alert(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

  return (
    <AuthLayout
      subtitle="Recover your account easily."
    >
      <div className="forgot-form">

        <p className="forgot-description">
          Enter your email address and
          we'll send you a password
          reset link.
        </p>

        <div className="form-group">

          <label>Email</label>

          <div className="input-wrapper">

            <RiMailLine className="input-icon" />

            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>

        </div>

        <button
          className="reset-button"
          onClick={handleResetPassword}
          disabled={loading}
        >
          {loading
            ? "Sending..."
            : "Send Reset Link"}
        </button>

      </div>

      <div className="forgot-footer">

        <span>
          Remember your password?
        </span>

        <button
          className="login-link"
          onClick={() =>
            navigate("/login")
          }
        >
          Back to Login
        </button>

      </div>

    </AuthLayout>
  );
}

export default ForgotPassword;