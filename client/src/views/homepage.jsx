import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";
import "../sass/main.scss";
import Typist from "react-typist";
import ScrollReveal from "scrollreveal";
import shareExpimg from "../assets/topSectionImg.jpg";
import shareSectionImg from "../assets/shareSectionImg.jpg";
import Cube from "../components/common/cube";

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
import Header from "./../components/header";
import Footer from "./../components/footer";
import "./../assets/style.css";
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
    ScrollReveal().reveal('.our__works__section',{origin:'bottom', distance: '130px', viewFactor: 0.5, reset:false }  );
    ScrollReveal().reveal('.share__experience__section',{origin:'left', distance: '130px', viewFactor: 0.5, reset:false }  );
    ScrollReveal().reveal('.main__heading, .section__para',{origin:'left', distance: '130px', viewFactor: 0.5, reset:false }  );
    ScrollReveal().reveal('.our_vision_background_wrapper',{origin:'top', distance: '130px', viewFactor: 0.5, reset:false }  );
    ScrollReveal().reveal('.our__works_',{origin:'left', distance: '130px', viewFactor: 0.6 }  );
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
            Rotaract
            <br />
            Club MNNIT
          </h1>
          <h3 className="type__heading_2">
            Service Before Self
          </h3>
        </Typist>
      ) : null;
    return (
      <div ref={this.topSection} className="container-fluid p-0">
        <div className="blob__container__section">
          <div className="container-fluid mt-3">
            <div className="container-lg  p-0">
              <Header></Header>
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
            </div>
          </div>

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
                <h3 className="about-us">
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
                </span>
              </div>
            </div>
          </div>
        </div>

        {/*our vision*/}
        <div className="container our_vision_background_wrapper">
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
        </div>
        
        {/*Our Works*/}
        {/* <div className="our__works_">
            <Suspense fallback={
            <div>Loading...</div>
            }>
                <Workcomponent />
            </Suspense>
            </div> */}

           

        <div className="container our__works__section our_vision_background_wrapper">
          <div className="container our__vision__section">
            <h1 className="main__heading">
              <span>Our Works</span>
            </h1>
          </div>
        </div>
        <div className="container " id="activities">
          <Carousel>
            <Carousel.Item  className="carouselItem" >
              <img
                className="d-block w-100 c_img"
                src="https://ik.imagekit.io/mnnitrotaract/Rotaract/cloth_donation/main_mbsmOHAoO.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645190555146"
                alt="First slide"
              />
              <Carousel.Caption >
                <h3>Winter Cloth Donation Drive</h3>
                <p>
                  Giving is not just making a donation, it is about making a
                  difference. We make sure in all ot capacity that no one has to
                  bear the cruel winter barehanded. We donate blankets and
                  winter clothes.
                </p>
                <Link
                  to={{
                    pathname: "/gallery",
                    state: { list: winterClothDriveList },
                  }}
                >
                  <Button variant="outline-secondary">View Gallery</Button>{" "}
                </Link>
              </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item className="carouselItem">
              <img
                className="d-block w-100 c_img"
                src="https://ik.imagekit.io/mnnitrotaract/Rotaract/sunday_activity/main_2k60LeRrMvlU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645191029971"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Sunday Activity</h3>
                <p>
                  While academics are important, it is extracurricular
                  activities that will teach you lessons that transcend the four
                  walls of a classroom. We train underprivileged children in
                  dance, music and art & craft.
                </p>
                <Link
                  to={{
                    pathname: "/gallery",
                    state: { list: sundayList },
                  }}
                >
                  <Button variant="outline-secondary">View Gallery</Button>{" "}
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img
                className="d-block w-100 c_img"
                src="https://ik.imagekit.io/mnnitrotaract/Rotaract/oldagehome_visit/main_SNu2pL8r6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645190943086"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Old Age Home Visit</h3>
                <p>
                  Love, care and treasure the elderly people in society. The
                  volunteers at Rotaract Club do frequent visits to nearby Old
                  Age Homes which makes elderly people lives there less
                  miserable.
                </p>
                <Link
                  to={{
                    pathname: "/gallery",
                    state: { list: oldAgeHomeList },
                  }}
                >
                  <Button variant="outline-secondary">View Gallery</Button>{" "}
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem"> 
              <img
                className="d-block w-100 c_img"
                src="https://ik.imagekit.io/mnnitrotaract/Rotaract/leprosy/main_0XpJkvbs3A.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645190698051"
                alt="Fourth slide"
              />

              <Carousel.Caption className="caption">
                <h3>Leprosy Hospital Visit</h3>
                <p>
                  Leprosy is still a big problem that the world faces. On World
                  Leprosy Day, 30 Jan, we organise many fundraiser activities to
                  raise funds for Leprosy Hospital.
                </p>
                <Link
                  to={{
                    pathname: "/gallery",
                    state: { list: leprosyList },
                  }}
                >
                  <Button variant="outline-secondary">View Gallery</Button>{" "}
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img
                className="d-block w-100 c_img"
                src="https://ik.imagekit.io/mnnitrotaract/Rotaract/disha_initiative/main_CTo5spJ6I.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645190465803"
                alt="Fifth slide"
              />

              <Carousel.Caption className="caption">
                <h3>Disha Initiative</h3>
                <p>
                  Not every kid has the privilege to study in a fancy school and
                  learn about new technology. We have adopted one government
                  school, where we teach school kids every weekend.
                </p>
                <Link
                  to={{
                    pathname: "/gallery",
                    state: { list: dikshaList },
                  }}
                >
                  <Button variant="outline-secondary">View Gallery</Button>{" "}
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img
                className="d-block w-100 c_img"
                src="https://ik.imagekit.io/mnnitrotaract/Rotaract/blood_donation/main.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645190003871"
                alt="Sixth slide"
              />

              <Carousel.Caption>
                <h3>Blood Donation Drive</h3>
                <p>
                  "Sometimes money cannot save life but donated blood can". We
                  organise many blood donation camps throughout the year and we
                  also try to clear awareness about the benefits of donation.
                </p>
                <Link
                  to={{
                    pathname: "/gallery",
                    state: { list: bloodDonationDriveList },
                  }}
                >
                  <Button variant="outline-secondary">View Gallery</Button>{" "}
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
              <img
                className="d-block w-100 c_img"
                src="https://ik.imagekit.io/mnnitrotaract/Rotaract/blind_school/main_AYjv9qeQ9Unx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645189410178"
                alt="Seventh slide"
              />

              <Carousel.Caption>
                <h3>Visually-impaired Children School Visit</h3>
                <p>
                  Even without sight, there is still a vision. We collaborate
                  and visit institutions that house s specially-abled children,
                  spend time with them, organise fun activities and try to bring
                  colours in their life
                </p>
                <Link
                  to={{
                    pathname: "/gallery",
                    state: { list: blindSchoolList },
                  }}
                >
                  <Button variant="outline-secondary">View Gallery</Button>{" "}
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <section className="contact-area " id="contact">
            <footer class="w-100 py-4 flex-shrink-0">
              <div class="container ">
                <div class="">
                  <div class="">
                    <h5 class="h1 text-white">Also..</h5>
                    <p class="small text-muted">
                      We were established on 28 May,2015 under the club
                      sponsorship of Rotary Club of Allahabad Elite, Uttar
                      Pradesh, India. From a humble 15 members team size we have
                      grown to a 60+ member team.
                    </p>
                    <div className="hr"></div>
                    <h6>
                      MNNIT Allahabad, Teliarganj, Prayagraj, Uttar Pradesh
                      211004
                    </h6>
                    <h6>
                      +01 2345 6789 12<span>|</span>+01 2345 6789 12
                    </h6>
                  </div>
                </div>
              </div>
            </footer>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}
