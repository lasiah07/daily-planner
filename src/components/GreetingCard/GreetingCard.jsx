import "./GreetingCard.css";

function GreetingCard({ name, quote }) {
  const hour = new Date().getHours();

  let greeting = "Good Morning";

  if (hour >= 11 && hour < 15) {
    greeting = "Good Afternoon";
  } else if (hour >= 15 && hour < 18) {
    greeting = "Good Evening";
  } else if (hour >= 18 || hour < 5) {
    greeting = "Good Night";
  }

  return (
    <div className="greeting-card">

      <div className="greeting-text">

        <h4>{greeting},</h4>

        <h1>{name}</h1>

        <p>{quote}</p>

      </div>

      <div className="sun">
        ☀
      </div>

    </div>
  );
}

export default GreetingCard;