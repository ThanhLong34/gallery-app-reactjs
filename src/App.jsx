import { useState, useCallback, useRef, useEffect } from "react";
import { uploadImage, getImageList } from "./apis/imageApi";
import Button from "./components/Button";
import GalleryGrid from "./components/GalleryGrid";
import ViewPictureDialog from "./components/ViewPictureDialog";

function App() {
	// States
	const [pictureList, setPictureList] = useState([]);
	const [choicePicture, setChoicePicture] = useState(null);
	const [viewPictureUrl, setViewPictureUrl] = useState("");

	// Refs
	const uploadPictureRef = useRef(null);

	// Effects
	useEffect(() => {
		getImageList().then((res) => {
			const newList = res.data.map((p) => ({
				...p,
				id: +p.id,
				size: +p.size,
			}));
			setPictureList(newList);
		});
	}, [choicePicture]);

	const handleCloseViewDialog = () => {
		setViewPictureUrl(null);
	};

	const handleUploadPictureClick = useCallback(() => {
		uploadPictureRef.current?.click();
	}, []);

	const handleUploadPicture = useCallback((e) => {
		const imageFile = e.target.files[0];
		if (imageFile) {
			uploadImage(imageFile).then((res) => {
				setChoicePicture(imageFile);
			});
		}
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
				<input
					ref={uploadPictureRef}
					type="file"
					accept="image/*"
					style={{ display: "none" }}
					onChange={handleUploadPicture}
				/>
				<Button prefixIcon="fa-solid fa-cloud-arrow-up" onClick={handleUploadPictureClick}>
					Upload picture
				</Button>
			</div>

			{/* Gallery grid */}
			<GalleryGrid
				pictureList={pictureList}
				onViewPicture={handleViewPicture}
				onDeletePicture={handleDeletePicture}
			/>

			{/* View picture dialog */}
			<ViewPictureDialog url={viewPictureUrl} onClose={handleCloseViewDialog} />
		</div>
	);
}

export default App;
