import "./SectionCard.css";

function SectionCard({
  title,
  children,
}) {
  return (
    <div className="section-card">

      <h3 className="section-title">
        {title}
      </h3>

      <div className="section-body">
        {children}
      </div>

    </div>
  );
}

export default SectionCard;