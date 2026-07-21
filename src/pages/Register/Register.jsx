import "./Register.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/AuthLayout/AuthLayout";

import {
  RiUser3Line,
  RiMailLine,
  RiLock2Line,
  RiEyeLine,
} from "react-icons/ri";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const handleRegister = () => {
    // TODO:
    // Firebase Authentication

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      alert("Lengkapi semua data.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password tidak sama.");
      return;
    }

    navigate("/home");
  };

  return (
    <AuthLayout
      subtitle="Create your beautiful journey."
    >
      <div className="register-form">

        <div className="form-group">

          <label>Full Name</label>

          <div className="input-wrapper">

            <RiUser3Line className="input-icon" />

            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

          </div>

        </div>

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
              placeholder="Create password"
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

        <div className="form-group">

          <label>Confirm Password</label>

          <div className="input-wrapper">

            <RiLock2Line className="input-icon" />

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Repeat password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >
              <RiEyeLine />
            </button>

          </div>

        </div>

        <button
          type="button"
          className="register-button"
          onClick={handleRegister}
        >
          Create Account
        </button>

      </div>

      <div className="register-footer">

        <span>
          Already have an account?
        </span>

        <button
          type="button"
          className="login-link"
          onClick={() =>
            navigate("/login")
          }
        >
          Sign In
        </button>

      </div>

    </AuthLayout>
  );
}

export default Register;