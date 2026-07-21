import "./AuthLayout.css";

function AuthLayout({
  subtitle,
  children,
}) {
  return (
    <div className="auth-page">

      <div className="auth-header">

        <h1 className="auth-logo">
          PLANORA
        </h1>

        <p className="auth-subtitle">
          {subtitle}
        </p>

      </div>

      <div className="auth-content">

        {children}

      </div>

    </div>
  );
}

export default AuthLayout;