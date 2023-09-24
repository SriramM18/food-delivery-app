import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="faq-section mtop20">
      {isVisible ? (
        <div className="faq-title mtop20" onClick={() => setIsVisible(false)}>
          <p>{title}</p>
          <FaChevronUp />
        </div>
      ) : (
        <div className="faq-title mtop20" onClick={() => setIsVisible(true)}>
          <p>{title}</p>
          <FaChevronDown />
        </div>
      )}

      <div className="faq-content">{isVisible && <p>{description}</p>}</div>
    </div>
  );
};

export default FAQ;
