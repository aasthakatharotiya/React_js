import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';

export default function Templet() {

  const options = {
    items: 3, // Number of items per slide
    margin: 30, // Space between items
    loop: true, // Infinite loop
    nav: true, // Show navigation arrows
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3000, // 3 seconds autoplay interval
    dots: true, // Enable pagination dots
    responsive: {
      0: { items: 1 }, // 1 item for small screens
      600: { items: 2 }, // 2 items for medium screens
      1000: { items: 3 }, // 3 items for large screens
    },
  };

  // const [activeTab, setActiveTab] = useState('STARTERS')

  // Data for each tab's menu
  // const menuData = {
  //   STARTERS: [
  //     { title: 'GARLIC BREAD', price: '$8.5', img: 'images/menu-item-thumbnail-01.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  //     { title: 'MIXED SALAD', price: '$25', img: 'images/menu-item-thumbnail-02.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  //     { title: 'BBQ CHICKEN WINGS', price: '$10', img: 'images/menu-item-thumbnail-03.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  //   ],
  //   'MAIN DISHES': [
  //     { title: 'MEAT FEAST PIZZA', price: '$5', img: 'images/menu-item-thumbnail-04.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  //     { title: 'CHICKEN TIKKA MASALA', price: '$15', img: 'images/menu-item-thumbnail-05.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  //     { title: 'SPICY MEATBALLS', price: '$6.5', img: 'images/menu-item-thumbnail-06.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  //   ],
  //   DESERTS: [
  //     { title: 'CHOCOLATE FUDGECAKE', price: '$4.5', img: 'images/menu-item-thumbnail-07.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  //     { title: 'APPLE PIE', price: '$9.5', img: 'images/menu-item-thumbnail-08.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  //   ],
  //   DRINKS: [
  //     { title: 'COFFEE', price: '$3', img: 'images/menu-item-thumbnail-09.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  //     { title: 'TEA', price: '$2.5', img: 'images/menu-item-thumbnail-10.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  //   ]
  // }

  return (
    <div>
      {/* <div id="loader">
        <div id="status"></div>
      </div> */}

      <div id="site-header">
        <header id="header" className="header-block-top">
          <div className="container">
            <div className="row">
              <div className="main-menu">
                <nav className="navbar navbar-default" id="mainNav">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <div className="logo">
                      <a className="navbar-brand js-scroll-trigger logo-header" href="#">
                        <img src="images/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                      <li className="active"><a href="#banner">Home</a></li>
                      <li><a href="#about">About us</a></li>
                      <li><a href="#menu">Menu</a></li>
                      <li><a href="#our_team">Team</a></li>
                      <li><a href="#gallery">Gallery</a></li>
                      <li><a href="#blog">Blog</a></li>
                      <li><a href="#pricing">pricing</a></li>
                      <li><a href="#reservation">Reservaion</a></li>
                      <li><a href="#footer">Contact us</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div id="banner" className="banner full-screen-mode parallax">
        <div className="container pr">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="banner-static">
              <div className="banner-text">
                <div className="banner-cell">
                  <h1>Dinner with us  <span className="typer" id="some-id" data-delay="200" data-delim=":" data-words="Friends:Family:Officemates" data-colors="red"></span><span className="cursor" data-cursorDisplay="_" data-owner="some-id"></span></h1>
                  <h2>Accidental appearances </h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod</p>
                  <div className="book-btn">
                    <a href="#reservation" className="table-btn hvr-underline-from-center">Book my Table</a>
                  </div>
                  <a href="#about">
                    <div className="mouse"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="about-main pad-top-100 pad-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                <h2 className="block-title"> About Us </h2>
                <h3>IT STARTED, QUITE SIMPLY, LIKE THIS...</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco. </p>

                <p> Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, Aenean commodo ligula eget dolor penatibu set magnis is parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, pellentesque eu, pretium quis, sem. quat massa quis enim. Donec vitae sapien ut libero venenatis fauci Nullam quis ante. Etiam sit amet rci eget eros. </p>

                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco. </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                <div className="about-images">
                  <img className="about-main" src="images/about-main.jpg" alt="About Main Image" />
                  <img className="about-inset" src="images/about-inset.jpg" alt="About Inset Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="special-menu pad-top-100 parallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                <h2 className="block-title color-white text-center"> Today's Special </h2>
                <h5 className="title-caption text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco.
                </h5>
              </div>

              {/* Owl Carousel */}
              <OwlCarousel className="special-box owl-carousel owl-theme" {...options}>
                <div className="item item-type-zoom">
                  <a href="#" className="item-hover">
                    <div className="item-info">
                      <div className="headline">
                        SALMON STEAK
                        <div className="line"></div>
                        <div className="dit-line">Lorem ipsum dolor sit amet, consectetur adip aliqua. Ut enim ad minim venia.</div>
                      </div>
                    </div>
                  </a>
                  <div className="item-img">
                    <img src="images/special-menu-1.jpg" alt="sp-menu" />
                  </div>
                </div>

                <div className="item item-type-zoom">
                  <a href="#" className="item-hover">
                    <div className="item-info">
                      <div className="headline">
                        ITALIAN PIZZA
                        <div className="line"></div>
                        <div className="dit-line">Lorem ipsum dolor sit amet, consectetur adip aliqua. Ut enim ad minim venia.</div>
                      </div>
                    </div>
                  </a>
                  <div className="item-img">
                    <img src="images/special-menu-2.jpg" alt="sp-menu" />
                  </div>
                </div>

                <div className="item item-type-zoom">
                  <a href="#" className="item-hover">
                    <div className="item-info">
                      <div className="headline">
                        VEG. ROLL
                        <div className="line"></div>
                        <div className="dit-line">Lorem ipsum dolor sit amet, consectetur adip aliqua. Ut enim ad minim venia.</div>
                      </div>
                    </div>
                  </a>
                  <div className="item-img">
                    <img src="images/special-menu-3.jpg" alt="sp-menu" />
                  </div>
                </div>

                {/* Add more items as needed */}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="menu" className="menu-main pad-top-100 pad-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                <h2 className="block-title text-center">
                  Our Menu
                </h2>
                <p className="title-caption text-center">There are many variations of passages of Lorem Ipsum available.</p>
              </div>
              <div className="tab-menu">
                <div className="slider slider-nav">
                  {Object.keys(menuData).map((tab) => (
                    <div
                      key={tab}
                      className={`tab-title-menu ${activeTab === tab ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      <h2>{tab}</h2>
                      <p><i className="flaticon-canape"></i></p>
                    </div>
                  ))}
                </div>

                <div className="slider slider-single">
                  {menuData[activeTab].map((item, index) => (
                    <div key={index} className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                      <div className="offer-item">
                        <img src={item.img} alt={item.title} className="img-responsive" />
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                        <span className="offer-price">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div id="pricing" className="pricing-main pad-top-100 pad-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h2 className="block-title text-center">
                Pricing
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut orci varius, elementum lectus nec, aliquam lectus. Duis neque augue, maximus in sapien ut, porta pharetra odio.</p>
            </div>
            <div className="panel-pricing-in">
              <div className="col-md-4 col-sm-4 text-center">
                <div className="panel panel-pricing">
                  <div className="panel-heading">
                    <div className="pric-icon">
                      <img src="images/store.png" alt="" />
                    </div>
                    <h3>Basic</h3>
                  </div>
                  <div className="panel-body text-center">
                    <p><strong>$30/<span>Month</span></strong></p>
                  </div>
                  <ul className="list-group text-center">
                    <li className="list-group-item"><i className="fa fa-check"></i> One Website</li>
                    <li className="list-group-item"><i className="fa fa-check"></i> One User</li>
                    <li className="list-group-item"><i className="fa fa-check"></i> 10 GB Bandwidth</li>
                    <li className="list-group-item"><i className="fa fa-times"></i> 2GB Storage</li>
                    <li className="list-group-item"><i className="fa fa-times"></i> Offline work</li>
                    <li className="list-group-item"><i className="fa fa-check"></i> 24x7 Support</li>
                  </ul>
                  <div className="panel-footer">
                    <a className="btn btn-lg btn-block hvr-underline-from-center" href="#">Purchase Now!</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 text-center">
                <div className="panel panel-pricing">
                  <div className="panel-heading">
                    <div className="pric-icon">
                      <img src="images/food.png" alt="" />
                    </div>
                    <h3>Pro</h3>
                  </div>
                  <div className="panel-body text-center">
                    <p><strong>$60/<span>Month</span></strong></p>
                  </div>
                  <ul className="list-group text-center">
                    <li className="list-group-item"><i className="fa fa-check"></i> One Website</li>
                    <li className="list-group-item"><i className="fa fa-check"></i> One User</li>
                    <li className="list-group-item"><i className="fa fa-check"></i> 50 GB Bandwidth</li>
                    <li className="list-group-item"><i className="fa fa-check"></i> 2GB Storage</li>
                    <li className="list-group-item"><i className="fa fa-check"></i> Offline work</li>
                    <li className="list-group-item"><i className="fa fa-check"></i> 24x7 Support</li>
                  </ul>
                  <div className="panel-footer">
                    <a className="btn btn-lg btn-block hvr-underline-from-center" href="#">Purchase Now!</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 text-center">
                <div className="panel panel-pricing">
                  <div className="panel-heading">
                    <div className="pric-icon">
                      <img src="images/coffee.png" alt="" />
                    </div>
                    <h3>Platinum</h3>
                  </div>
                  <div className="panel-body text-center">
                    <p><strong>$90/<span>Month</span></strong></p>
                  </div>
                  <ul className="list-group text-center">
                    <li className="list-group-item"><i className="fa fa-check"></i> One Website</li>
                    <li className="list-group-item"><i className="fa fa-check"></i> One User</li>
                    <li className="list-group-item"><i className="fa fa-check"></i> 100 GB Bandwidth</li>
                    <li className="list-group-item"><i className="fa fa-check"></i> 2GB Storage</li>
                    <li className="list-group-item"><i className="fa fa-check"></i> Offline work</li>
                    <li className="list-group-item"><i className="fa fa-check"></i> 24x7 Support</li>
                  </ul>
                  <div className="panel-footer">
                    <a className="btn btn-lg btn-block hvr-underline-from-center" href="#">Purchase Now!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="our_team" className="team-main pad-top-100 pad-bottom-100 parallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                <h2 className="block-title text-center">
                  Our Team
                </h2>
                <p className="title-caption text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
              </div>
              <div className="team-box">

                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="sf-team">
                      <div className="thumb">
                        <a href="#"><img src="images/staff-01.jpg" alt="" /></a>
                      </div>
                      <div className="text-col">
                        <h3>John Doggett</h3>
                        <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.</p>
                        <ul className="team-social">
                          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="sf-team">
                      <div className="thumb">
                        <a href="#"><img src="images/staff-02.jpg" alt="" /></a>
                      </div>
                      <div className="text-col">
                        <h3>Jeffrey Spender</h3>
                        <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.</p>
                        <ul className="team-social">
                          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="sf-team">
                      <div className="thumb">
                        <a href="#"><img src="images/staff-03.jpg" alt="" /></a>
                      </div>
                      <div className="text-col">
                        <h3>Monica Reyes</h3>
                        <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.</p>
                        <ul className="team-social">
                          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="gallery" className="gallery-main pad-top-100 pad-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                <h2 className="block-title text-center">
                  Our Gallery
                </h2>
                <p className="title-caption text-center">There are many variations of passages of Lorem Ipsum available </p>
              </div>
              <div className="gal-container clearfix">
                <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#1">
                      <img src="images/gallery_01.jpg" alt="" />
                    </a>
                    <div className="modal fade" id="1" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                          <div className="modal-body">
                            <img src="images/gallery_01.jpg" alt="" />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 1 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#2">
                      <img src="images/gallery_02.jpg" alt="" />
                    </a>
                    <div className="modal fade" id="2" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                          <div className="modal-body">
                            <img src="images/gallery_02.jpg" alt="" />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 2 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#3">
                      <img src="images/gallery_03.jpg" alt="" />
                    </a>
                    <div className="modal fade" id="3" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                          <div className="modal-body">
                            <img src="images/gallery_03.jpg" alt="" />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 3 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#4">
                      <img src="images/gallery_04.jpg" alt="" />
                    </a>
                    <div className="modal fade" id="4" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                          <div className="modal-body">
                            <img src="images/gallery_04.jpg" alt="" />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 4 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#5">
                      <img src="images/gallery_05.jpg" alt="" />
                    </a>
                    <div className="modal fade" id="5" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                          <div className="modal-body">
                            <img src="images/gallery_05.jpg" alt="" />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 5 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#9">
                      <img src="images/gallery_06.jpg" alt="" />
                    </a>
                    <div className="modal fade" id="9" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                          <div className="modal-body">
                            <img src="images/gallery_06.jpg" alt="" />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 6 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#10">
                      <img src="images/gallery_07.jpg" alt="" />
                    </a>
                    <div className="modal fade" id="10" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                          <div className="modal-body">
                            <img src="images/gallery_07.jpg" alt="" />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 7 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#11">
                      <img src="images/gallery_08.jpg" alt="" />
                    </a>
                    <div className="modal fade" id="11" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                          <div className="modal-body">
                            <img src="images/gallery_08.jpg" alt="" />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 8 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#12">
                      <img src="images/gallery_09.jpg" alt="" />
                    </a>
                    <div className="modal fade" id="12" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                          <div className="modal-body">
                            <img src="images/gallery_09.jpg" alt="" />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 9 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
                  <div className="box">
                    <a href="#" data-toggle="modal" data-target="#13">
                      <img src="images/gallery_10.jpg" alt="" />
                    </a>
                    <div className="modal fade" id="13" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                          <div className="modal-body">
                            <img src="images/gallery_10.jpg" alt="" />
                          </div>
                          <div className="col-md-12 description">
                            <h4>This is the 10 one on my Gallery</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="blog" className="blog-main pad-top-100 pad-bottom-100 parallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h2 className="block-title text-center">
                Our Blog
              </h2>
              <div className="blog-box clearfix">
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                  <div className="col-md-6 col-sm-6">
                    <div className="blog-block">
                      <div className="blog-img-box">
                        <img src="images/featured-image-01.jpg" alt="" />
                        <div className="overlay">
                          <a href=""><i className="fa fa-link" aria-hidden="true"></i></a>
                        </div>
                      </div>
                      <div className="blog-dit">
                        <p><span>25 NOVEMBER, 2014</span></p>
                        <h2>LATEST RECIPES JUST IN!</h2>
                        <h5>BY John Doggett</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                  <div className="col-md-6 col-sm-6">
                    <div className="blog-block">
                      <div className="blog-img-box">
                        <img src="images/featured-image-02.jpg" alt="" />
                        <div className="overlay">
                          <a href=""><i className="fa fa-link" aria-hidden="true"></i></a>
                        </div>
                      </div>
                      <div className="blog-dit">
                        <p><span>2 NOVEMBER, 2014</span></p>
                        <h2>NEW RECRUITS HAVE ARRIVED!</h2>
                        <h5>BY Jeffrey Spender</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                  <div className="col-md-6 col-sm-6">
                    <div className="blog-block">
                      <div className="blog-img-box">
                        <img src="images/featured-image-03.jpg" alt="" />
                        <div className="overlay">
                          <a href=""><i className="fa fa-link" aria-hidden="true"></i></a>
                        </div>
                      </div>
                      <div className="blog-dit">
                        <p><span>4 NOVEMBER, 2014</span></p>
                        <h2>BAKING TIPS FROM THE PROS</h2>
                        <h5>BY Monica Reyes</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                  <div className="col-md-6 col-sm-6">
                    <div className="blog-block">
                      <div className="blog-img-box">
                        <img src="images/featured-image-04.jpg" alt="" />
                        <div className="overlay">
                          <a href=""><i className="fa fa-link" aria-hidden="true"></i></a>
                        </div>
                      </div>
                      <div className="blog-dit">
                        <p><span>12 NOVEMBER, 2014</span></p>
                        <h2>ALL YOUR EGGS BELONG TO US</h2>
                        <h5>BY John Doggett</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog-btn-v">
                <a className="hvr-underline-from-center" href="#">View the Blog</a>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div id="reservation" className="reservations-main pad-top-100 pad-bottom-100">
        <div className="container">
          <div className="row">
            <div className="form-reservations-box">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                  <h2 className="block-title text-center">
                    Reservations
                  </h2>
                </div>
                <h4 className="form-title">BOOKING FORM</h4>
                <p>PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p>

                <form id="contact-form" method="post" className="reservations-box" name="contactform" action="mail.php">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="text" name="form_name" id="form_name" placeholder="Name" required="required" data-error="Firstname is required." />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="email" name="email" id="email" placeholder="E-Mail ID" required="required" data-error="E-mail id is required." />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="text" name="phone" id="phone" placeholder="contact no." />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <select name="no_of_persons" id="no_of_persons" className="selectpicker">
                        <option selected disabled>No. Of persons</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="text" name="date-picker" id="date-picker" placeholder="Date" required="required" data-error="Date is required." />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <input type="text" name="time-picker" id="time-picker" placeholder="Time" required="required" data-error="Time is required." />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <select name="preferred_food" id="preferred_food" className="selectpicker">
                        <option selected disabled>preferred food</option>
                        <option>Indian</option>
                        <option>Continental</option>
                        <option>Mexican</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="form-box">
                      <select name="occasion" id="occasion" className="selectpicker">
                        <option selected disabled>Occasion</option>
                        <option>Wedding</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="reserve-book-btn text-center">
                      <button className="hvr-underline-from-center" type="submit" value="SEND" id="submit">BOOK MY TABLE </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer" className="footer-main">
        <div className="footer-news pad-top-100 pad-bottom-70 parallax">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                  <h2 className="ft-title color-white text-center"> Newsletter </h2>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <form>
                  <input type="email" placeholder="Enter your e-mail id" />
                  <a href="#" className="orange-btn"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></a>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-box pad-top-70">
          <div className="container">
            <div className="row">
              <div className="footer-in-main">
                <div className="footer-logo">
                  <div className="text-center">
                    <img src="images/logo.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="footer-box-a">
                    <h3>About Us</h3>
                    <p>Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes.</p>
                    <ul className="socials-box footer-socials pull-left">
                      <li>
                        <a href="#">
                          <div className="social-circle-border"><i className="fa  fa-facebook"></i></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="social-circle-border"><i className="fa fa-twitter"></i></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="social-circle-border"><i className="fa fa-google-plus"></i></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="social-circle-border"><i className="fa fa-pinterest"></i></div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="social-circle-border"><i className="fa fa-linkedin"></i></div>
                        </a>
                      </li>
                    </ul>

                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="footer-box-b">
                    <h3>New Menu</h3>
                    <ul>
                      <li><a href="#">Italian Bomba Sandwich</a></li>
                      <li><a href="#">Double Dose of Pork Belly</a></li>
                      <li><a href="#">Spicy Thai Noodles</a></li>
                      <li><a href="#">Triple Truffle Trotters</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="footer-box-c">
                    <h3>Contact Us</h3>
                    <p>
                      <i className="fa fa-map-signs" aria-hidden="true"></i>
                      <span>6 E Esplanade, St Albans VIC 3021, Australia</span>
                    </p>
                    <p>
                      <i className="fa fa-mobile" aria-hidden="true"></i>
                      <span>
                        +91 80005 89080
                      </span>
                    </p>
                    <p>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      <span><a href="#">support@foodfunday.com</a></span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="footer-box-d">
                    <h3>Opening Hours</h3>

                    <ul>
                      <li>
                        <p>Monday - Thursday </p>
                        <span> 11:00 AM - 9:00 PM</span>
                      </li>
                      <li>
                        <p>Friday - Saturday </p>
                        <span>  11:00 AM - 5:00 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="copyright" className="copyright-main">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <h6 className="copy-title"> Copyright &copy; 2018 Food Funday is powered by <a href="https://themewagon.com/" target="_blank">ThemeWagon</a> </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="scrollup" style={{display: 'none'}}>Scroll</a>

      <section id="color-panel" className="close-color-panel">
        <a className="panel-button gray2"><i className="fa fa-cog fa-spin fa-2x"></i></a>

        <div className="segment">
          <h4 className="gray2 normal no-padding">Color Scheme</h4>
          <a title="orange" className="switcher orange-bg"></a>
          <a title="strong-blue" className="switcher strong-blue-bg"></a>
          <a title="moderate-green" className="switcher moderate-green-bg"></a>
          <a title="vivid-yellow" className="switcher vivid-yellow-bg"></a>
        </div>
      </section>
    </div>
  )
}
