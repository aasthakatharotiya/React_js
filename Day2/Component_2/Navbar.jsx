import React, { useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('#slider_jsx'); // Set default active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className='header'>
        <div className="logo">
          {/* <img src="logo.png" alt="" /> */}
        </div>

        <div className="nav d-none d-lg-block">
          <a
            className={activeLink === '#slider_jsx' ? 'active' : ''}
            href="#slider_jsx"
            onClick={() => handleLinkClick('#slider_jsx')}
          >
            Home
          </a>
          <a
            className={activeLink === '#about_jsx' ? 'active' : ''}
            href="#about_jsx"
            onClick={() => handleLinkClick('#about_jsx')}
          >
            About
          </a>
          <a
            className={activeLink === '#service_jsx' ? 'active' : ''}
            href="#service_jsx"
            onClick={() => handleLinkClick('#service_jsx')}
          >
            Service
          </a>
          <a
            className={activeLink === '#product_jsx' ? 'active' : ''}
            href="#product_jsx"
            onClick={() => handleLinkClick('#product_jsx')}
          >
            Product
          </a>
          <a
            className={activeLink === '#cart_jsx' ? 'active' : ''}
            href="#cart_jsx"
            onClick={() => handleLinkClick('#cart_jsx')}
          >
            Blog
          </a>
          <a
            className={activeLink === '#footer_jsx' ? 'active' : ''}
            href="#footer_jsx"
            onClick={() => handleLinkClick('#footer_jsx')}
          >
            Contact Us
          </a>
        </div>

        <div className="login">
          <button>
            <i className="fa-solid fa-circle-user"></i>
            &nbsp;
            Login
          </button>

          <button>
            <i className="fa-solid fa-heart"></i>
          </button>

          <button>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </>
  );
}
