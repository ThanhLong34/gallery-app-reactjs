import { useState, useCallback } from "react";
import Button from "./components/Button";
import GalleryGrid from "./components/GalleryGrid";
import ViewPictureDialog from "./components/ViewPictureDialog";

function App() {
	// States
	const [pictures, setPictures] = useState([
		{
			id: 1,
			url: "https://images.unsplash.com/photo-1679926591722-79bff79c561a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		},
		{
			id: 2,
			url: "https://images.unsplash.com/photo-1680125533385-eb2bb7464c48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		},
		{
			id: 3,
			url: "https://images.unsplash.com/photo-1639450172947-5ae4218b6cba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
		},
		{
			id: 4,
			url: "https://images.unsplash.com/photo-1640118277356-ab1d809a33c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
		},
		{
			id: 5,
			url: "https://images.unsplash.com/photo-1476681227192-05dedd2b6709?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
		},
		{
			id: 6,
			url: "https://images.unsplash.com/photo-1537163625539-21fb24904a88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1492&q=80",
		},
		{
			id: 7,
			url: "https://images.unsplash.com/photo-1456115767017-8ad77860f241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		},
	]);
	const [viewPictureUrl, setViewPictureUrl] = useState("");

	// Handles
	function handleCloseViewDialog() {
		setViewPictureUrl(null);
	}
	const handleUploadPicture = useCallback(() => {
		console.log('upload');
	}, []);
	const handleViewPicture = useCallback((url) => {
		setViewPictureUrl(url);
	}, []);
	const handleDeletePicture = useCallback((id) => {
		console.log(id);
	}, []);

	return (
		<div className="App">
			<h1 className="title">GALLERY APP</h1>
			<div className="flex-center">
				<Button prefixIcon="fa-solid fa-cloud-arrow-up" onClick={handleUploadPicture}>
					Upload picture
				</Button>
			</div>

			{/* Gallery grid */}
			<GalleryGrid pictures={pictures} onViewPicture={handleViewPicture} onDeletePicture={handleDeletePicture} />

			{/* View picture dialog */}
			<ViewPictureDialog url={viewPictureUrl} onClose={handleCloseViewDialog} />
		</div>
	);
}

export default App;
