import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";
import "../sass/main.scss";
import Typist from "react-typist";
import ScrollReveal from "scrollreveal";
import shareExpimg from "../assets/topSectionImg.jpg";
import shareSectionImg from "../assets/shareSectionImg.jpg";
import Cube from "../components/common/cube";
import ShareRotaryStory from "../components/shareRotaryStory";
import Logo from "../assets/logo.png";
import shareExpimg3 from "../assets/shareExp3.jpg";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import bloodDonationDriveList from "./../data/bloodDonationDrive";
import winterClothDriveList from "./../data/winterClothDrive";
import blindSchoolList from "./../data/blindSchool";
import dikshaList from "./../data/dikshaActivity";
import leprosyList from "./../data/leprosyVisit";
import oldAgeHomeList from "./../data/oldAgeHome";
import sundayList from "./../data/sundayActivity";
import "./../assets/style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
// const Workcomponent = React.lazy(() => import("../components/our_works"));

export default class Homepage extends Component {
  state = {
    scrollTop: 0,
    animate1: 0,
    show: true,
  };

  form = React.createRef();
  gallery = React.createRef();
  storyForm = React.createRef();
  topSection = React.createRef();
  executeFormScroll = () => this.form.current.scrollIntoView();
  executeGalleryScroll = () => this.gallery.current.scrollIntoView();
  executeStoryFormScroll = () => this.storyForm.current.scrollIntoView();
  executeStoryTopScroll = () => this.topSection.current.scrollIntoView();

  componentDidMount() {
    // ScrollReveal().reveal('.our__works__section',{origin:'bottom', distance: '130px', viewFactor: 0.5, reset:false }  );
    // ScrollReveal().reveal('.share__experience__section',{origin:'left', distance: '130px', viewFactor: 0.5, reset:false }  );
    // ScrollReveal().reveal('.main__heading, .section__para',{origin:'left', distance: '130px', viewFactor: 0.5, reset:false }  );
    // ScrollReveal().reveal('.our_vision_background_wrapper',{origin:'top', distance: '130px', viewFactor: 0.5, reset:false }  );
    // ScrollReveal().reveal('.our__works_',{origin:'left', distance: '130px', viewFactor: 0.6 }  );
    ScrollReveal().reveal(".s__b__s", {
      afterReveal: this.renderTypwriter,
      viewFactor: 0.6,
      reset: false,
    });
  }
  renderTypwriter = () => {
    this.setState({ animate1: 1, show: false });
    return (
      <Typist>
        <h1>Service before self</h1>
      </Typist>
    );
  };
  render() {
    const titleHead =
      this.state.animate1 === 1 ? (
        <Typist cursor={{ show: false }}>
          <h1 className="type__heading_1">
            Service
            <br />
            before self
          </h1>
        </Typist>
      ) : null;
    return (
      <div ref={this.topSection} className="container-fluid p-0">
        <div className="blob__container__section">
          <div className="container-fluid mt-3">
            <div className="container-lg  p-0">
              <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
                <Container>
                  <Navbar.Brand href="#home"><strong>React-Bootstrap</strong></Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#features">Features</Nav.Link>
                      <Nav.Link href="#pricing">
                        <Link to="/payment">
                          Pay
                        </Link>
                      </Nav.Link>
                      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Nav>
                      <Nav.Link href="#deets">More</Nav.Link>
                      <Nav.Link eventKey={2} href="#memes">

                        <Link to="/gallery">
                          <span className="nav__link">View gallery</span>
                        </Link>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              {/*<nav className="navbar  navbar-expand-lg m-0 p-0">
                <span className="navbar-brand brand">Rotaract Club MNNIT</span>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#landingPageNavbar"
                  aria-controls="landingPageNavbar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="landingPageNavbar"
                >
                  <div className="navbar-nav ml-auto align-items-center">
                    {/* <Link onClick={this.executeFormScroll}><span className="mr-3 nav__link">Join us</span></Link> 
                    <Link to="/gallery">
                      <span className="nav__link">View gallery</span>
                    </Link>
                  </div>
                </div>
              </nav>*/}
              <div className="rotaract-logo-wrapper">
                <img src={Logo} className="rotaract-logo" alt="" />
              </div>
            </div>
          </div>

          {/*intro section*/}
          <div className="container intro__section d-flex justify-content-center">
            <div className="row">
              {/* <Typist cursor={{show:false}} avgTypingDelay={50} >
                        <span className="col-md-12 d-flex justify-content-center intro__section__heading">Rotaractives: Spreading smiles</span>
                    </Typist> */}
              <div className="container-fluid mt-5 mb-5 p-0 share__experience__section">
                <div className="row m-0 d-flex justify-content-center">
                  <img
                    style={{ pointerEvents: "none" }}
                    src={shareExpimg}
                    className="img img-fluid top_img"
                    alt=""
                  />
                  <img
                    src={shareExpimg3}
                    className="share-exp-img-mobile img2 img img-fluid w-100"
                    alt=""
                  />
                </div>
                {/* <h3 className="about-us">
                  <span>About Us</span>
                </h3>
                <span className="col-md-12 d-flex justify-content-center intro__section__para">
                  About the club Rotaract Club of MNNIT is an international
                  service organization under the Rotary International, for all
                  who wish to create a difference in the society today.
                  <br />
                  We were established on 28 May,2015 under the club sponsorship
                  of Rotary Club of Allahabad Elite, Uttar Pradesh, India. From
                  a humble 15 members team size we have grown to a 60+ member
                  team.
                </span> */}
              </div>
            </div>
          </div>
        </div>

        {/*our vision*/}
        {/* <div className="container our_vision_background_wrapper">
          <div className="container our__vision__section">
            <h1 className="main__heading">
              <span>Our vision</span>
            </h1>
            <div className="">
              <span className="section__para text-center section__para__ourVision">
                The motto of the club is service before self. We aim not only to
                serve society in any possible way but create a feeling of care,
                responsibility and duty among the students of the college.
              </span>
            </div>
          </div>
        </div> */}
        <div className="main-container">
          <div className="cards">
            <div className="card card-1">
              <div className="card__title">
                <h2>About Us</h2>
              </div>
              <h2 className="card__desc">
                Rotaract Club of MNNIT is an international service organization
                under the Rotary International, for all who wish to create a
                difference in the society today.We were established on 28
                May,2015 under the club sponsorship of Rotary Club of Allahabad
                Elite, Uttar Pradesh, India. From a humble 15 members team size
                we have grown to a 60+ member team.
              </h2>
            </div>

            <div className="card card-2">
              <div className="card__title">
                <h2>OUR VISION</h2>
              </div>
              <h2 className="card__desc">
                The motto of the club is service before self. We aim not only to
                serve society in any possible way but create a feeling of care,
                responsibility and duty among the students of the college.
              </h2>
            </div>
          </div>
        </div>
        {/*Our Works*/}
        {/* <div className="our__works_">
            <Suspense fallback={
            <div>Loading...</div>
            }>
                <Workcomponent />
            </Suspense>
            </div> */}
        <div className="container our_vision_background_wrapper">
          <div className="container our__vision__section">
            <h1 className="main__heading">
              <span>Our Works</span>
            </h1>

          </div>
        </div>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={shareSectionImg}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link
                to={{
                  pathname: "/gallery",
                  state: { list: winterClothDriveList },
                }}
              >
                <Button variant="outline-secondary">
                  Winter Cloth Donation Drive
                </Button>{" "}
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={shareSectionImg}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link
                to={{
                  pathname: "/gallery",
                  state: { list: sundayList },
                }}
              >
                <Button variant="outline-secondary">Sunday Activity</Button>{" "}
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={shareSectionImg}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link
                to={{
                  pathname: "/gallery",
                  state: { list: oldAgeHomeList },
                }}
              >
                <Button variant="outline-secondary">Old Age Home Visit</Button>{" "}
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={shareSectionImg}
              alt="Fourth slide"
            />

            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link
                to={{
                  pathname: "/gallery",
                  state: { list: leprosyList },
                }}
              >
                <Button variant="outline-secondary">
                  Leprosy Hospital Visit
                </Button>{" "}
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={shareSectionImg}
              alt="Fifth slide"
            />

            <Carousel.Caption>
              <h3>Fifth slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link
                to={{
                  pathname: "/gallery",
                  state: { list: dikshaList },
                }}
              >
                <Button variant="outline-secondary">Diksha Activity</Button>{" "}
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={shareSectionImg}
              alt="Sixth slide"
            />

            <Carousel.Caption>
              <h3>Sixth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Link
                to={{
                  pathname: "/gallery",
                  state: { list: bloodDonationDriveList },
                }}
              >
                <Button variant="outline-secondary">
                  Blood Donation Drive
                </Button>{" "}
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={shareSectionImg}
              alt="Seventh slide"
            />

            <Carousel.Caption>
              <h3>Seventh slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link
                to={{
                  pathname: "/gallery",
                  state: { list: blindSchoolList },
                }}
              >
                <Button variant="outline-secondary">Blind School</Button>{" "}
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="container-fluid s__b__s">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              {titleHead}
            </div>
            <div className="col-md-6">
              <Cube />
            </div>
          </div>
        </div>
        {/* <div ref={this.gallery}>
                    <Gallery />
            </div> */}

        <div
          onClick={this.executeStoryTopScroll}
          className="d-flex justify-content-end p-2 arrow_to_top"
        >
          <i className="fa fa-2x fa-arrow-up"></i>
        </div>
        <div ref={this.storyForm} className="">
          <ShareRotaryStory />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
