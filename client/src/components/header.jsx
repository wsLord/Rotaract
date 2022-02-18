import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
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
						<Nav.Link href="#features">Post</Nav.Link>
						<Nav.Link href="#pricing">
							<Link to="/payment">Donate</Link>
						</Nav.Link>
						<NavDropdown title="More" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Views</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Achievements</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Activities</NavDropdown.Item>
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
	);
};

export default Header;