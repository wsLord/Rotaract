import React, { useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const PhotoGallery = () => {
	let data = useLocation();
	let list = data.state.list;
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { list, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};
	console.log(list);

	return (
		<div className="container text-center my-4 p-4">
			<div>
				<Gallery photos={list} onClick={openLightbox} />
				<ModalGateway>
					{viewerIsOpen ? (
						<Modal onClose={closeLightbox}>
							<Carousel
								currentIndex={currentImage}
								views={list.map((x) => ({
									...x,
									srcset: x.srcSet,
								}))}
							/>
						</Modal>
					) : null}
				</ModalGateway>
			</div>
		</div>
	);
};

export default PhotoGallery;
