import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Carousel, { Modal, ModalGateway } from "react-images";
import EmailIcon from "@mui/icons-material/Email";

import "../sass/main.scss";
import qrcode from "../assets/QRcode.jpeg";
import "./../assets/style.css";
import Header from "./header";
import Footer from "./footer";

const Payment = () => {
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event) => {
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setViewerIsOpen(false);
	};

	return (
		<>
			<Header />
			<div class="cards">
				<div class="card" id="card3">
					<div>
						<h5>YOU MAKE IT POSSIBLE</h5>
						<p>
							Rotaract Club MNNIT is a Non-Profit Organisation, that is run by the volunteers of
							students of MNNIT. We don't receive funding from college or any organisation rather
							this club runs with the help of generous people like you.
						</p>
						<p>
							Why? Some of our activities like blanket donations, specially-abled children school
							visits cost us a substantial amount of money. This is where your generosity comes into
							play. The "little" you contribute, is much for them.
						</p>
						<p>
							What do you get? "Joy of giving lasts longer than Joy of getting" We update the
							volunteering work done by us on our social media handles and seeing your contribution
							doing wonders to many, nothing can match that feeling.
						</p>
						<p>Thank You</p>
					</div>
				</div>

				<div class="card" id="card1">
					<div>
						<h4>Make someone smile using: </h4>
					</div>
					<div>
						<h5>UPI ID: </h5>
						<h6>aakanksha.khetan@okicici</h6>
					</div>
					<hr />
					<div>
						<h5>For donating using other methods or any other query, you can mail: </h5>
						<div>
							<p id="check">
								<a href="mailto:aakanksha.khetan@gmail.com">
									<h6>
										<EmailIcon />
										aakanksha.khetan@gmail.com
									</h6>
								</a>
							</p>
						</div>
					</div>
				</div>

				<div class="card" id="card2">
					<img src={qrcode} alt="QR" onClick={openLightbox}></img>
					<ModalGateway>
						{viewerIsOpen ? (
							<Modal onClose={closeLightbox}>
								<img src={qrcode} alt="QR" width="600" height="600" />
							</Modal>
						) : null}
					</ModalGateway>
					<h6 align="center">Click to enlarge!</h6>
				</div>
			</div>

			<Footer />
		</>
	);
};
export default Payment;
