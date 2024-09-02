import React from 'react'

export default function Footer() {
  return (
    <center id='footer_jsx'>
      <div className='container-fluid footer'>

        <div className="footer_logo">
          {/* <img src="logo.png" alt="" /> */}
        </div>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus mi nec lectus tempor. Lorem ipsum dolor sit amet,
        </span>

        <div className="row">
          <div className="footer_info mt-5 col col-12 col-sm-12 col-md-6 col-lg-3">
            <button className='footer_btn_hover'>
              <i class="fa-solid fa-location-dot"></i>
            </button>
            <p>14 Tottenham Court Road, London, England</p>
          </div>
          <div className="footer_info mt-5 col col-12 col-sm-12 col-md-6 col-lg-3">
            <button className='footer_btn_hover'>
              <i class="fa-solid fa-phone"></i>
            </button>
            <p>(102) 3456 789 - (102) 3456 789</p>
          </div>
          <div className="footer_info mt-5 col col-12 col-sm-12 col-md-6 col-lg-3">
            <button className='footer_btn_hover'>
              <i class="fa-solid fa-envelope"></i>
            </button>
            <p>contact@gmail.com</p>
          </div>

          <div className="footer_info mt-5 col col-12 col-sm-12 col-md-6 col-lg-3">
            <button className='insta'>
              <i class="fa-brands fa-instagram"></i>
            </button>
            <button className='you_tube'>
              <i class="fa-brands fa-youtube"></i>
            </button>
            <button className='twitter'>
              <i class="fa-brands fa-twitter"></i>
            </button>
            <button className='pinterest'>
              <i class="fa-brands fa-pinterest"></i>
            </button>
            <p>Follow Us</p>
          </div>
        </div>
      </div>
    </center>
  )
}
