import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';
// import "swiper/css/navigation";

import "swiper/css/pagination";
// import 'swiper/css/scrollbar';

const Testimonials = () => {
  const dataAPI = [
    {
      avatar: AVTR1,
      name: "Priya Jerson",
      review:
        "This site definitely appeals to the average person because the layout is so  simple  but very  VERY  effective.  It is a clean  site  with a flawless  look, and someone  without any  technical  background  would definitely  appreciate  it.  The layout makes anyone feel  comfortable because it is so well done and clean  looking.  You feel as if you are in good hands and you know that you will be able to find  anything you need on this site.",
    },

    {
      avatar: AVTR2,
      name: "Swetha Sri",
      review:
        "The design is very  professional and well done.  I love the washed-out image of the  globe on the left  behind  the  links.  The  site  feels great.  I suggest  that you change the fonts to Arial, a more  rounded font, to go with the professional feel of the site.  There are minimum graphics,  and the  graphics  there are small  and  fast-loading.The colors of the images go together nicely.",
    },

    {
      avatar: AVTR3,
      name: "Crazy Bie",
      review:
        "The design is very consistent throughout all of the pages- clean and easy to read.Well done!:)",
    },
    {
      avatar: AVTR4,
      name: "Monika Panday",
      review:
        "This site would appeal to anyone, technical background or not, because it is simple and very effective.  The  washed-out  image tiled in the background is very welcoming and would appeal to anyone.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
      >
        {dataAPI.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="Client__name">{name}</h5>
              <small className="Client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
