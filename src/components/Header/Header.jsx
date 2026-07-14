function Header() {
  const userName = "Lasiah";

  return (
    <header className="header">
      <h3>Good Morning,</h3>
      <h1>{userName}</h1>
      <p>Organize your day beautifully.</p>
    </header>
  );
}

export default Header;