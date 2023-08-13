import React from "react";
import "./experiance.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What Skills I Have</h5>
      <h2>My Experiances</h2>
      <div className="container experiance__container">
        {/* Front-end Skills */}
        <div className="experiance__frontend">
          <h3>Frontend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <a href="https://www.w3schools.com/html" target="_blank">
                <BsFillPatchCheckFill />
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </a>
            </article>
            <article className="experiance__details">
              <a href="https://www.w3schools.com/css" target="_blank">
                <BsFillPatchCheckFill />
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </a>
            </article>
            <article className="experiance__details">
              <a href="https://www.w3schools.com/js" target="_blank">
                <BsFillPatchCheckFill />
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </a>
            </article>
            <article className="experiance__details">
              <a href="https://www.w3schools.com/bootstrap" target="_blank">
                <BsFillPatchCheckFill />
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </a>
            </article>
            <article className="experiance__details">
              <a href="https://https://tailwindcss.com/" target="_blank">
                <BsFillPatchCheckFill />
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </a>
            </article>
            <article className="experiance__details">
              <a href="https://www.w3schools.com/react" target="_blank">
                <BsFillPatchCheckFill />
                <h4>React JS</h4>
                <small className="text-light">Intermediate</small>
              </a>
            </article>
          </div>
        </div>
        {/*END of Front-end Skills */}

        {/*  Back-end Skills */}
        <div className="experiance__backend">
          <h3>Backend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <BsFillPatchCheckFill />
              <h4>Node JS</h4>
              <small className="text-light">Basic</small>
            </article>
            <article className="experiance__details">
              <BsFillPatchCheckFill />
              <h4>PHP</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experiance__details">
              <BsFillPatchCheckFill />
              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experiance__details">
              <BsFillPatchCheckFill />
              <h4>MySQL</h4>
              <small className="text-light">Basic</small>
            </article>
            <article className="experiance__details">
              <BsFillPatchCheckFill />
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        {/* END Back-end Skills */}
      </div>
    </section>
  );
};

export default Experiance;
