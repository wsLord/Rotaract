import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";
import "../sass/main.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

import qrcode from "../assets/QRcode.jpeg";

import "./../assets/style.css";
import EmailIcon from '@mui/icons-material/Email';
const Payment = () => {
    return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                <Container>
                  <Navbar.Brand href="#home">
                    <strong>Rotaract</strong>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#features">Post</Nav.Link>
                      <Nav.Link href="#pricing">
                        <Link to="/payment">Donate</Link>
                      </Nav.Link>
                      <NavDropdown
                        title="More"
                        id="collasible-nav-dropdown"
                      >
                        <NavDropdown.Item href="#action/3.1">
                          About Us
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Views
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Achievements
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Activities
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Nav>
                      <Nav.Link href="#deets">Join Us</Nav.Link>
                      <Nav.Link eventKey={2} href="#memes">
                        <Link to="/gallery">
                          <span className="nav__link">View gallery</span>
                        </Link>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            <div class="cards">
                <div class="card" id="card3">

                    <div >
                        <h5>YOU MAKE IT POSSIBLE</h5>
                        <p >Rotaract Club MNNIT is a Non-Profit Organisation, that is run by the volunteers of students of MNNIT. We don’t receive funding from college or any organisation rather this club runs with the help of generous people like you.
                        </p>
                        <p>
                            Why?
                            Some of our activities like blanket donations, specially-abled children school visits cost us a substantial amount of money. This is where your generosity comes into play. The ‘little’ you contribute, is much for them.
                        </p>
                        <p>
                            What do you get?
                            ‘Joy of giving lasts longer than Joy of getting’
                            We update the volunteering work done by us on our social media handles and seeing your contribution doing wonders to many, nothing can match that feeling.
                        </p>
                        <p>
                            Thank You
                        </p>
                    </div>
                </div>


                <div class="card" id="card1">

                    <div >
                        <h4 >You can donate using -</h4>

                    </div>
                    <div>
                        <h5 >UPI ID: aakanksha.khetan@okicici</h5>
                    </div>
                    <hr />
                    <div>
                        <h5>For any query you can mail:-</h5>
                        <div>
                            <p id="check"> <EmailIcon /> <h5> aakanksha.khetan@gmail.com</h5></p>

                        </div>
                    </div>
                </div>
                <div class="card" id="card2">
                    <img src={qrcode} alt="..."></img>
                    {/* <div >
                        <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div> */}
                </div>
            </div>

        </>
    )
}
export default Payment;