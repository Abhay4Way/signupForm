import React from "react";

const index = () => {
  // Select all slides
  let curSlide = 0;

  const nextSlide = () => {
    const slides = document.querySelectorAll(".slide");

    let maxSlide = slides.length - 1;

    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  };
  const prevSlide = () => {
    const slides = document.querySelectorAll(".slide");

    let maxSlide = slides.length - 1;

    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  };
  // loop through slides and set each slides translateX property to index * 100%

  return (
    <div className="main">
      <div class="slider">
        <div class="slide">
          <img
            src="https://source.unsplash.com/random?landscape,mountain"
            alt=""
          />
        </div>

        <div class="slide">
          <img src="https://source.unsplash.com/random?landscape,cars" alt="" />
        </div>

        <div class="slide">
          <img
            src="https://source.unsplash.com/random?landscape,night"
            alt=""
          />
        </div>

        <div class="slide">
          <img src="https://source.unsplash.com/random?landscape,city" alt="" />
        </div>

        <button onClick={nextSlide} class="btn btn-next">
          Next
        </button>
        <button onClick={prevSlide} class="btn btn-prev">
          Prev
        </button>
      </div>
    </div>
  );
};

export default index;
