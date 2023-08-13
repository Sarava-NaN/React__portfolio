import React from "react";
import CV from "../../assets/cv.pdf";
import { HiDocumentDownload } from "react-icons/hi";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn hover__btn">
        Download CV <HiDocumentDownload className="download__icon" />
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
