import "./Login.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/AuthLayout/AuthLayout";

import { loginUser } from "../../services/authService";

import {
  RiMailLine,
  RiLock2Line,
  RiEyeLine,
} from "react-icons/ri";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password) {
      alert("Lengkapi email dan password.");
      return;
    }

    try {
      setLoading(true);

      await loginUser(
        email,
        password
      );

      navigate("/home");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert(
            "Email atau password salah."
          );
          break;

        case "auth/user-not-found":
          alert(
            "Akun tidak ditemukan."
          );
          break;

        case "auth/wrong-password":
          alert(
            "Password salah."
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
      subtitle="Let's start your productive day."
    >
      <div className="login-form">

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

        <div className="form-group">

          <label>Password</label>

          <div className="input-wrapper">

            <RiLock2Line className="input-icon" />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >
              <RiEyeLine />
            </button>

          </div>

        </div>

        <button
          className="forgot-password"
          type="button"
          onClick={() =>
            navigate("/forgot-password")
          }
        >
          Forgot Password?
        </button>

        <button
          type="button"
          className="login-button"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading
            ? "Signing In..."
            : "Sign In"}
        </button>

      </div>

      <div className="login-footer">

        <span>
          Don't have an account?
        </span>

        <button
          type="button"
          className="register-link"
          onClick={() =>
            navigate("/register")
          }
        >
          Create Account
        </button>

      </div>

    </AuthLayout>
  );
}

export default Login;