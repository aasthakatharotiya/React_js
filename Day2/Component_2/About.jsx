import React from 'react'

export default function About() {
  return (
    <div id='about_jsx' className='container about_container'>

      <center>  
        <h1>
          <p>Us</p>
          <h2><span>A</span>bout</h2>
        </h1>
      </center>


      <div className="row">
        <div className="about_col mt-5 mt-lg-2 col col-12 col-sm-12 col-md-6 col-lg-3">
            <div className="about_us">
                <div className="about_icon">
                    <i class="fa-solid fa-plane"></i>
                </div>

                <div className="about_text">
                    <h6>Free Shipping</h6>
                    <span>
                        Free shipping on all US order or order above $200
                    </span>
                </div>
            </div>
        </div>
        <div className="about_col mt-5 mt-lg-2 col col-12 col-sm-12 col-md-6 col-lg-3">
            <div className="about_us">
                <div className="about_icon">
                    <i class="fa-solid fa-life-ring"></i>
                </div>

                <div className="about_text">
                    <h6>Support 24/7</h6>
                    <span>
                        Contact us 24 hours a day, 7 days a week
                    </span>
                </div>
            </div>
        </div>
        <div className="about_col mt-5 mt-lg-2 col col-12 col-sm-12 col-md-6 col-lg-3">
            <div className="about_us">
                <div className="about_icon">
                    <i class="fa-solid fa-share"></i>
                </div>

                <div className="about_text">
                    <h6>30 Days Return</h6>
                    <span>
                        Simply return it within 30 days for an exchange
                    </span>
                </div>
            </div>
        </div>
        <div className="about_col mt-5 mt-lg-2 col col-12 col-sm-12 col-md-6 col-lg-3">
            <div className="about_us">
                <div className="about_icon">
                    {/* <i class="fa-regular fa-credit-card"></i> */}
                    <i class="fa-solid fa-money-check-dollar"></i>
                </div>

                <div className="about_text">
                    <h6>100% Payment Secure</h6>
                    <span>
                        We ensure secure payment with PEV
                    </span>
                </div>
            </div>
        </div>
      </div>


      <div className="row about_col_bg">
        <div className="mt-5 col col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="about_bg">
                <div className='about_2'>
                    <h1>Handmade Clothes</h1>
                    <span>Extra 50% Off</span>
                </div>
            </div>
        </div>
        <div className="mt-5 col col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="about_bg">
                <div className='about_1'>
                    <h1>Gift Craft</h1>
                    <span>Biggest Sale</span>
                </div>
            </div>
        </div>
        <div className="mt-5 col col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="about_bg">
                <div className='about_3'>
                    <h1>Handmade Candle</h1>
                    <span>Off 50% in This Week</span>
                </div>
            </div>
        </div>
        <div className="mt-5 col col-12 col-sm-12 col-md-6 d-lg-none">
            <div className="about_bg">
                <div className='about_4'>
                    <h1>Wall Plate</h1>
                    <span>Extra 50% Off</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
