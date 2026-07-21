import "./ForgotPassword.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/AuthLayout/AuthLayout";

import {
  RiMailLine,
} from "react-icons/ri";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const handleResetPassword = () => {
    // TODO:
    // Firebase Reset Password

    if (!email.trim()) {
      alert("Masukkan email terlebih dahulu.");
      return;
    }

    alert(
      "Link reset password berhasil dikirim."
    );

    navigate("/login");
  };

  return (
    <AuthLayout
      subtitle="Recover your account easily."
    >

      <div className="forgot-form">

        <p className="forgot-description">
          Enter your email address and we'll
          send you a password reset link.
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
        >
          Send Reset Link
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