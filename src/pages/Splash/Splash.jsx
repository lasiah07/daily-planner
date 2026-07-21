import "./Splash.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { RiCalendarCheckFill } from "react-icons/ri";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {

      // Mengecek apakah user sudah pernah membuka Planora
      const hasVisited = localStorage.getItem(
        "planora_hasVisited"
      );

      if (hasVisited) {

        // Nanti kalau sudah ada Firebase,
        // bagian ini akan dicek apakah user sudah login.
        navigate("/login", {
          replace: true,
        });

      } else {

        navigate("/welcome", {
          replace: true,
        });

      }

    }, 1200);

    return () => clearTimeout(timer);

  }, [navigate]);

  return (
    <div className="splash-page">

      <div className="splash-content">

        <div className="logo-circle">

          <RiCalendarCheckFill />

        </div>

        <h1 className="logo-title">
          Planora
        </h1>

        <p className="logo-subtitle">
          Organize Your Day Beautifully
        </p>

      </div>

      <div className="loading-section">

        <div className="loading-bar">

          <div className="loading-fill" />

        </div>

        <span>Loading...</span>

      </div>

    </div>
  );
}

export default Splash;