import "./Welcome.css";

import { useNavigate } from "react-router-dom";

import {
  RiCheckboxCircleFill,
  RiCalendarCheckFill,
  RiFireFill,
  RiArrowRightLine,
} from "react-icons/ri";

function Welcome() {

  const navigate = useNavigate();

  const handleGetStarted = () => {

    localStorage.setItem(
      "planora_hasVisited",
      "true"
    );

    navigate("/login", {
      replace: true,
    });

  };

  return (

    <div className="welcome-page">

      <div className="welcome-content">

        <div className="welcome-logo">

          <RiCalendarCheckFill />

        </div>

        <h1>
          Welcome to Planora
        </h1>

        <p className="welcome-subtitle">

          Your personal productivity companion.

        </p>

        <div className="feature-list">

          <div className="feature-item">

            <RiCheckboxCircleFill />

            <span>
              Manage daily tasks
            </span>

          </div>

          <div className="feature-item">

            <RiFireFill />

            <span>
              Build healthy routines
            </span>

          </div>

          <div className="feature-item">

            <RiCalendarCheckFill />

            <span>
              Never miss your deadlines
            </span>

          </div>

        </div>

      </div>

      <div className="welcome-footer">

        <button
          className="start-button"
          onClick={handleGetStarted}
        >

          Get Started

          <RiArrowRightLine />

        </button>

        <p className="signin-text">

          Already have an account?

          <button
            className="signin-button"
            onClick={() =>
              navigate("/login")
            }
          >
            Sign In
          </button>

        </p>

      </div>

    </div>

  );

}

export default Welcome;