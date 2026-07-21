import "./Login.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/AuthLayout/AuthLayout";

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

  const handleLogin = () => {
    // TODO:
    // Diganti Firebase Authentication
    navigate("/home");
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
              placeholder="Enter your password"
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
          type="button"
          className="forgot-password"
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
        >
          Sign In
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