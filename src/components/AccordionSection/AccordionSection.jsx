import { useState } from "react";
import "./AccordionSection.css";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

function AccordionSection({
  title,
  count,
  children,
  defaultOpen = true,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="accordion-section">
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="accordion-left">
          <h2>{title}</h2>

          <span>{count}</span>
        </div>

        {isOpen ? (
          <RiArrowUpSLine className="accordion-icon" />
        ) : (
          <RiArrowDownSLine className="accordion-icon" />
        )}
      </button>

      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </section>
  );
}

export default AccordionSection;