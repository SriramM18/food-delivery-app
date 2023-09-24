import { useState } from "react";
import about from "../assets/svg/about.svg";

import { FAQs } from "../constants";
import { aboutContent } from "../constants";

import FAQ from "../components/FAQ";

const About = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div className="container">
      <h2 className="heading-text">About Us!</h2>
      <img className="display-img-md mbottom10" src={about} />
      <h3 className="subheading-text">{aboutContent.title}</h3>
      <p className="paragraph">{aboutContent.description}</p>

      <div className="FAQ">
        <h3 className="subheading-text mtop10">Frequently Asked Questions</h3>
        {FAQs.map((FAQContent) => (
          <FAQ
            key={FAQContent.id}
            id={FAQContent.id}
            title={FAQContent.title}
            description={FAQContent.description}
            isVisible={visibleSection === FAQContent.id}
            setIsVisible={(display) => {
              if (display) {
                setVisibleSection(FAQContent.id);
              } else {
                setVisibleSection(" ");
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
