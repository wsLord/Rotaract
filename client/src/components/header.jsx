import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

const Header = (props) => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
			<Container>
				<Navbar.Brand>
					<Link to="/">
						<strong>Rotaract</strong>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="">
							<Link to="/#activities">Activities</Link>
						</Nav.Link>
						<Nav.Link href="">
							<Link to="/donate">Donate</Link>
						</Nav.Link>
					</Nav>
					{/* {About Us, Views, Achievements, Activities} */}
					<Nav>
						<Nav.Link href="">
							<Link to="/#activities">Join Us</Link>
						</Nav.Link>
						<Nav.Link eventKey={2} href="/gallery">
							<Link to="/about">
								<span className="nav__link">About Team</span>
							</Link>
						</Nav.Link>

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
