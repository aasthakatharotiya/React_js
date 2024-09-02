import React, { useState, useEffect } from 'react';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div id='slider_jsx'>
      <br /><br /><br /><br />
      <div id="slider">
        <a href="#" className="control_next" onClick={nextSlide}>
          <i className="fa-solid fa-greater-than"></i>
        </a>
        <a href="#" className="control_prev" onClick={prevSlide}>
          <i className="fa-solid fa-less-than"></i>
        </a>
        <div className="slides">
          <div className={`slide slide_1 ${currentSlide === 0 ? 'active' : ''}`}>
            <div className="slide_text">
              <h1>
                Handmade Collection
                <br />
                <h2>50% off</h2>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae qui saepe aspernatur, ad asperiores, temporibus distinctio ea magnam sint omnis optio ab error! Doloremque explicabo necessitatibus facere officia saepe exercitationem!
              </p>
              <button>+ Shop Now</button>
            </div>
          </div>

          <div className={`slide slide_2 ${currentSlide === 1 ? 'active' : ''}`}>
            <div className="slide_text">
              <h1>
                Handmade Collection
                <br />
                <h2>50% off</h2>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae qui saepe aspernatur, ad asperiores, temporibus distinctio ea magnam sint omnis optio ab error! Doloremque explicabo necessitatibus facere officia saepe exercitationem!
              </p>
              <button>+ Shop Now</button>
            </div>
          </div>

          <div className={`slide slide_3 ${currentSlide === 2 ? 'active' : ''}`}>
            <div className="slide_text">
              <h1>
                Handmade Collection
                <br />
                <h2>50% off</h2>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae qui saepe aspernatur, ad asperiores, temporibus distinctio ea magnam sint omnis optio ab error! Doloremque explicabo necessitatibus facere officia saepe exercitationem!
              </p>
              <button>+ Shop Now</button>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}
