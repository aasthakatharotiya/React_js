import React, { useEffect, useState } from 'react';

export default function Service() {
  const startTimeMillis = 1705780800000; // Saturday 20 January 2024 20:00:00 (GMT)
  const endTimeMillis = 1802649540000; // Sunday 14 February 2027 23:59:00 (GMT)

  function calculateRemaining() {
    const now = new Date().getTime();
    return now >= startTimeMillis && now < endTimeMillis ? endTimeMillis - now : 0;
  }

  const [timeLeft, setTimeLeft] = useState(calculateRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;
  const second = 1000;

  const days = Math.floor(timeLeft / day);
  const hours = Math.floor((timeLeft % day) / hour);
  const minutes = Math.floor((timeLeft % hour) / minute);
  const seconds = Math.floor((timeLeft % minute) / second);

  return (
    <div id='service_jsx' className='container-fluid service_container'>
      <div className="row service_row_1">
        {/* Other content for row_1 */}
      </div>

      <center>
        <div className="row service_row_2">
          <div id="col_counter" className="wow animate__animated animate__backInRight col col-12 col-xl-6 col-sm-12">
            <h3 style={{ fontFamily: "'Alex Brush'", fontSize: '60px' }}>Deal of the day</h3>
            
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
            </p>
            <h3>Spinach</h3>
            <p>$10 <span className="span"> now $5 only</span></p>

            <div className="campaign campaign-0 mt-5">
              <div className="counter timer">
                <div className="counter-boxes">
                  <div className="count-box">
                    <h1 className="value day">{days}</h1>
                    <span>Days</span>
                  </div>
                  <div className="count-box">
                    <h1 className="value hour">{hours}</h1>
                    <span>Hours</span>
                  </div>
                  <div className="count-box">
                    <h1 className="value minute">{minutes}</h1>
                    <span>Minutes</span>
                  </div>
                  <div className="count-box">
                    <h1 className="value second">{seconds}</h1>
                    <span>Seconds</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </center>
    </div>
  );
}
