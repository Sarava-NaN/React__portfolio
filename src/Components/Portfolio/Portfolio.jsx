import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  // Data__maping
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Mobile IOS App Design for Tesla | UX Design | UI Design",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/22243366-Mobile-IOS-App-Design-for-Tesla-UX-Design-UI-Design",
    },
    {
      id: 2,
      image: IMG2,
      title: "Dashboard Web App Product UI Design:",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/22239032-Educational-Mobile-iOS-App?utm_source=Clipboard_Shot&utm_campaign=purrwebui&utm_content=Educational%20Mobile%20iOS%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=purrwebui&utm_content=Educational%20Mobile%20iOS%20App&utm_medium=Social_Share",
    },
    {
      id: 3,
      image: IMG3,
      title: "Threads Website VR Version",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/22236848-Threads-Website-VR-Version?utm_source=Clipboard_Shot&utm_campaign=ramotion&utm_content=Threads%20Website%20VR%20Version&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=ramotion&utm_content=Threads%20Website%20VR%20Version&utm_medium=Social_Share",
    },
    {
      id: 4,
      image: IMG4,
      title: "Educational Mobile iOS App",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/1315388-Dashboard-Web-App-Product-UI-Design-Job-Summary?utm_source=Clipboard_Shot&utm_campaign=yarnell&utm_content=Dashboard%20Web%20App%20Product%20UI%20Design%3A%20Job%20Summary&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=yarnell&utm_content=Dashboard%20Web%20App%20Product%20UI%20Design%3A%20Job%20Summary&utm_medium=Social_Share",
    },
    {
      id: 5,
      image: IMG5,
      title: "Landing Page Website",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/3139404-Landing-Page-Website?utm_source=Clipboard_Shot&utm_campaign=ramotion&utm_content=Landing%20Page%20Website&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=ramotion&utm_content=Landing%20Page%20Website&utm_medium=Social_Share",
    },
    {
      id: 6,
      image: IMG6,
      title: "Brainwave AI Landing Page Kit – Mobile version",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/18418516-edtech-platform-product-design-dashboard?utm_source=Clipboard_Shot&utm_campaign=daniel_sun&utm_content=edtech%20platform%3A%20product%20design%2C%20dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=daniel_sun&utm_content=edtech%20platform%3A%20product%20design%2C%20dashboard&utm_medium=Social_Share",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
