import React, { useState, useEffect } from 'react';
 // Assume you put the CSS styles in this file

const CountWeb = () => {
  const [count, setCount] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  var increase = () => setCount(count + 1);
  var decrease = () => setCount(count - 1);
  var reset = () => setCount(0);

  useEffect(() => {
    const coffeeBeanContainer = document.getElementById("coffe_bean");
    const coffeeStoreCup = document.getElementById("coffee_store_cup");
    const cupimg = document.getElementById("coffee_store_cup_img");
    const coffeemachine = document.getElementById("coffee_machine");
    const coffeeMug = document.getElementById("coffee_mug");
    // const mugimg = document.getElementById("mug_img");
    const centerReached = scrollPosition > 500;

    // Adjust the container's position based on scroll
    if (scrollPosition > 500) {
      coffeeBeanContainer.style.transition = "top 1s ease-in-out";
      coffeeBeanContainer.style.top = "1000px";
      coffeeBeanContainer.style.position = "relative";
    } else {
      coffeeBeanContainer.style.transition = "";
      coffeeBeanContainer.style.top = "";
      coffeeBeanContainer.style.position = "fixed";
    }

    // First stage: Move coffee beans towards the center
    const coffeeBeansLeft = document.querySelectorAll('.coffee_left .left_side_coffee div');
    const coffeeBeansRight = document.querySelectorAll('.coffee_right .right_side_coffee div');

    coffeeBeansLeft.forEach((bean, index) => {
      const offsetX = (index + 1) * scrollPosition * 0.1;
      bean.style.transform = `translate(${offsetX}px)`;
      bean.style.opacity = 1;
      bean.style.display = '';
    });

    coffeeBeansRight.forEach((bean, index) => {
      const offsetX = -(index + 1) * scrollPosition * 0.1;
      bean.style.transform = `translate(${offsetX}px)`;
      bean.style.opacity = 1;
      bean.style.display = '';
    });

    // Second stage: Once they reach the center, start wiggling and move down
    if (centerReached) {
      coffeeBeansLeft.forEach((bean, index) => {
        const offsetX = (index + 1) * scrollPosition * 0.1;
        const offsetY = (scrollPosition - 400) * 0.5;
        const wiggleX = Math.sin(scrollPosition * 0.05 + index) * 10;
        let opacity = 1;
        if (offsetY > 200) {
          opacity = Math.max(0, 1 - ((offsetY - 200) / 100));
        }
        if (opacity <= 0) {
          bean.style.display = 'none';
        } else {
          bean.style.display = '';
          bean.style.opacity = opacity;
        }
        bean.style.transform = `translate(${offsetX + wiggleX}px, ${offsetY}px)`;
      });

      coffeeBeansRight.forEach((bean, index) => {
        const offsetX = -(index + 1) * scrollPosition * 0.1;
        const offsetY = (scrollPosition - 500) * 0.5;
        const wiggleX = Math.sin(scrollPosition * 0.05 + index) * 10;
        let opacity = 1;
        if (offsetY > 200) {
          opacity = Math.max(0, 1 - ((offsetY - 200) / 100));
        }
        if (opacity <= 0) {
          bean.style.display = 'none';
        } else {
          bean.style.display = '';
          bean.style.opacity = opacity;
        }
        bean.style.transform = `translate(${offsetX + wiggleX}px, ${offsetY}px)`;
      });
    }

    // Gradual margin-top for coffee_store_cup
    if (scrollPosition > 1090) {
      coffeeStoreCup.style.marginTop = "700px";
      coffeeStoreCup.style.marginLeft = "450px";
      coffeeStoreCup.style.transition = "2s";
      coffeemachine.style.transition = "2s";
      coffeemachine.style.marginTop = "-336px";
      cupimg.style.height = "120px";
      cupimg.style.marginTop = "100px";
      cupimg.style.marginLeft = "-400px";
      cupimg.style.transition = "2s";
      cupimg.style.zIndex = "50";
    } else {
      coffeeStoreCup.style.marginTop = "";
      coffeeStoreCup.style.marginLeft = "";
      coffeemachine.style.marginTop = "";
      cupimg.style.height = "";
      cupimg.style.marginTop = "";
      cupimg.style.marginLeft = "";
    }

    if (scrollPosition > 1250) {
      coffeemachine.style.marginTop = "-";
      cupimg.style.marginLeft = "0px";
      cupimg.style.transition = "2s";
      cupimg.style.zIndex = "50";
    } 

    if (scrollPosition > 1400) {
      coffeemachine.style.position = "fixed";
      cupimg.style.marginTop = "100px";
      cupimg.style.height = "400px";
      cupimg.style.transform = "rotate(-50deg)";
      coffeeMug.style.marginTop = "-285px";
      coffeeMug.style.transform = "rotateY(-180deg)";
      coffeeMug.style.marginLeft = "-200px";
      coffeeMug.style.transition = "2s";
    } else {
      cupimg.style.transform = "";
      coffeeMug.style.marginTop = "";
      coffeeMug.style.transition = "2s";
      coffeeMug.style.transform = "";
      coffeeMug.style.marginLeft = "";
      coffeeMug.style.transition = "";
      coffeemachine.style.position = "relative";
    }

    if (scrollPosition > 1800) {
      women_coffee.style.transition = "2s"
      women_coffee.style.marginTop = "-435px";
      disp_mug.style.display = "block";
      disp_mug.style.height = "50px";
      disp_mug.style.transition = "2s"
      disp_mug.style.marginTop = "420px";
      disp_mug.style.marginLeft = "-100px";
    }
    else{
      women_coffee.style.marginTop = "";
      disp_mug.style.display = "";
      // disp_mug.style.height = "";
      disp_mug.style.transition = ""
      disp_mug.style.marginTop = "";
      disp_mug.style.marginLeft = "";
    }

    // if (scrollPosition > 1800) {
    //   women_coffee.style.marginTop = "-395px";
    //   disp_mug.style.display = "block";
    //   disp_mug.style.height = "50px";
    //   disp_mug.style.transition = "2s"
    //   disp_mug.style.marginTop = "400px";
    //   disp_mug.style.marginLeft = "-100px";
    // }
    // else{
    //   women_coffee.style.marginTop = "";
    //   disp_mug.style.display = "";
    //   disp_mug.style.height = "";
    //   disp_mug.style.transition = "s"
    //   disp_mug.style.marginTop = "";
    //   disp_mug.style.marginLeft = "";
    // }
  }, [scrollPosition]);

  return (
    <div>
      <div id="coffe_bean" className="coffe_bean container-fluid p-0">
        <div className="row">
          <div className="coffee_left col">
            <h1>Use State</h1>
            <br />
            <h2>{count}</h2>
            <br />
            <div className="btn_flex">
              <button onClick={increase}>Increase</button>
              <button onClick={decrease}>Decrease</button>
              <button onClick={reset}>Reset</button>
            </div>
            <div className="left_side_coffee">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className={`coffee_${index + 1}`}>
                  <img src="coffee_Bean.png" alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="coffee_right col">
            <img src="coffee_cup.png" alt="" />
            <div className="right_side_coffee">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className={`coffee_${index + 1}`}>
                  <img src="coffee_Bean.png" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="coffee_store_cup" className="coffee_store">
        <img id="coffee_store_cup_img" src="coffee_store_cup.png" alt="" />
      </div>
      <div id="coffee_machine" className="coffee_machine">
        <img src="coffee_machine.png" alt="" />
      </div>
      <div id="coffee_mug" className="coffee_mug">
        <img id="mug_img" src="coffee_mug.png" alt="Coffee Mug" />
        <center>
          <img id="disp_mug" style={{ display: 'none' }} src="coffee_mug.png" alt="Coffee Mug" />
        </center>
      </div>
      <div id="women_coffee" className="women_coffee">
        <img src="women_work.png" alt="Women Work" />
      </div>
    </div>
  );
};

export default CountWeb;
