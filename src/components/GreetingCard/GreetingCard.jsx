import "./GreetingCard.css";

import {
  RiSunLine,
  RiMoonClearLine,
} from "react-icons/ri";

function GreetingCard({ name, quote }) {
  const hour = new Date().getHours();

  let greeting = "";
  let Icon = RiSunLine;
  let theme = "";

  if (hour >= 5 && hour < 11) {
    greeting = "Good Morning";
    theme = "morning";
  } else if (hour >= 11 && hour < 15) {
    greeting = "Good Afternoon";
    theme = "afternoon";
  } else if (hour >= 15 && hour < 18) {
    greeting = "Good Evening";
    theme = "evening";
  } else {
    greeting = "Good Night";
    theme = "night";
    Icon = RiMoonClearLine;
  }

  const today = new Date();

  const date = today.toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
    }
  );

  return (
    <div
      className={`greeting-card ${theme}`}
    >
      <div className="greeting-left">

        <span className="greeting-label">
          {greeting}
        </span>

        <h1>{name}</h1>

        <p className="greeting-date">
          {date}
        </p>

        <p className="greeting-quote">
          {quote}
        </p>

      </div>

      <div className="greeting-icon">
        <Icon />
      </div>
    </div>
  );
}

export default GreetingCard;