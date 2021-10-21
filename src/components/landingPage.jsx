import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from "react-icons/fa";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <>
        <div  className="position-relative w-100 landing-hero">
          <div className="position-absolute text-white d-flex flex-column align-items-center justify-content-center landing-hero-inner">
    
            <form action="">
          <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            <div className="input-group">
              <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" className="form-control border-0 bg-light" />
              <div className="input-group-append">
                <button id="button-addon1" type="submit" className="btn btn-link text-primary"><FaSearch /></button>
              </div>
            </div>
          </div>
          </form>
          <h2 className="top-text">YOUR</h2>
            <div className="underline--blue"><h1 className=" hero-heading mb-4 mt-2 font-weight-bold text-center ">TRUSTED</h1></div>
            <div className="text-center">
              <br />
              <h3>WILL SERVICE PARTNER</h3>
              <br /><br />
              <h4><u>CALCULATED</u></h4>
            </div>
          </div>
        </div>
    <div className="container" id="services"> 
      <div className="row">    
        <div className="col-md-4 padding-50 align-items-center justify-content-center ">
          <h3>WILL SERVICE PARTNER</h3>
          <h4><u>CALCULATED</u></h4>
        </div>
        <div className="col-md-8 padding-50 align-items-center justify-content-center ">
          <div className="row">
            <div className="col-sm-4">
              <div className="cardback align-items-center justify-content-center ">
                <div className="cardback-inner align-items-center justify-content-center">
                  <center>
                    <h4> Will Creation  </h4>
                    <hr />
                    <Button
                      color="primary"
                      variant="contained"
                      component={Link}
                      to="/products/willcreation"
                    > Buy Now!
                    </Button>
                 </center>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            <div className="cardback align-items-center justify-content-center ">
                <div className="cardback-inner align-items-center justify-content-center">
                  <center>
                    <h4>Basic Will Registration</h4>
                    <hr />
                    <Button
                      color="primary"
                      variant="contained"
                      component={Link}
                      to="/search"
                    >
                      Buy Now!
                    </Button>
                 </center>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
            <div className="cardback align-items-center justify-content-center ">
                <div className="cardback-inner align-items-center justify-content-center">
                  <center>
                    <h4>Add Deed of Gift</h4>
                    <hr />
                    <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/managewill/adddeedofgift"
          >Buy Now!
          </Button>
                 </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">    
        <div className="col-md-4 padding-50 align-items-center justify-content-center ">
        </div>
        <div className="col-md-8 padding-50 align-items-center justify-content-center ">
          <div className="row">
            <div className="col-sm-4">
              <div className="cardback align-items-center justify-content-center ">
                <div className="cardback-inner align-items-center justify-content-center">
                  <center>
                    <h4> Add Living Trust  </h4>
                    <hr />
                    <Button
                      color="primary"
                      variant="contained"
                      component={Link}
                      to="/managewill/addlivingtrust"
                    >
                      Buy Now!
                    </Button>
                 </center>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="cardback align-items-center justify-content-center ">
                  <div className="cardback-inner align-items-center justify-content-center">
                    <center>
                      <h4>Executor Will Copy Request</h4>
                      <hr />
                      <Button
                        color="primary"
                        variant="contained"
                        component={Link}
                        to="/execform"
                      > Buy Now!
                      </Button>
                  </center>
                  </div>
                </div>
            </div>
            <div className="col-sm-4">
              <div className="cardback align-items-center justify-content-center ">
                  <div className="cardback-inner align-items-center justify-content-center">
                    <center>
                      <h4>Probate Registry Will Copy Request</h4>
                      <hr /><Button
                      color="primary"
                      variant="contained"
                      component={Link}
                      to="/probateform"
                    >
                      Buy Now!
                    </Button>
                  </center>
                  </div>
                </div>
            </div>
          </div>
          </div>
        </div>
    </div>

    <div id="CTa-Home">
      <div className="CTa-Home-inner">
        <div className="container">
          <div className="row ctahome-row">
            
          <div className="col-sm-7"></div>
          
          <div className="col-sm-5 ctahome-col">
            
        <div className="CTA-element align-items-center justify-content-center">
          <h3 className="heading-cta">WRITE YOUR WILL AT<br /> YOUR TIME AND PLACE,<br /> NOW ITS QUICK, EASY<br /> AND HASSLE FREE.</h3>
          <br />
          <Button className="white-btn">GET IT NOW</Button>
        </div>
          </div>
          </div>
        </div>
      </div>
    </div>


    <div id="about-Home">
      <div className="about-Home-inner">
          <div className="row about-row">
            <div className="col about-col">
              <h3>ABOUT US</h3>
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante nibh, elementum et magna in, finibus convallis purus. Suspendisse mattis tincidunt luctus. Cras quis placerat sapien. Praesent semper vehicula lacinia. Nunc ac cursus ipsum, et molestie tortor. Morbi nec sem lacus. Mauris auctor sed augue vel lacinia. Sed sed dictum metus.</p>
            </div>
            <div className="col">
              <img src="1.jpg" alt="Image" className="about-img"/>
            </div>
          </div>
      </div>
    </div>


    <div id="last-sechome">
      <div className="row ctahome-row">
        <div className="col-sm-7">

        </div>
          
        <div className="col-sm-5 column-end">
              <div className="section-end0-home">
                <h2>Lorem Ipsum</h2>
          </div>
        </div>

      </div>
    </div>


    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ante nibh, elementum et magna in, finibus convallis purus. Suspendisse mattis tincidunt luctus. Cras quis placerat sapien. Praesent semper vehicula lacinia. Nunc ac cursus ipsum, et molestie tortor. Morbi nec sem lacus. Mauris auctor sed augue vel lacinia. Sed sed dictum metus.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><FaSearch /></a></li>
              <li><a className="twitter" href="#"><FaSearch /></a></li>
              <li><a className="dribbble" href="#"><FaSearch /></a></li>
              <li><a className="linkedin" href="#"><FaSearch /></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
      </>
    );
  }
}

export default LandingPage;
