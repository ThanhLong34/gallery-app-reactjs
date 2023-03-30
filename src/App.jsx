import { useState } from "react";

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

	// Handles
	function handleUploadPicture() {}
	function handleViewPicture(url) {}
	function handleDeletePicture(id) {}

	return (
		<div className="App">
			<h1 className="title">GALLERY APP</h1>
			<div className="flex-center">
				<button className="btn btn-secondary" onClick={handleUploadPicture}>Upload picture</button>
			</div>
			<div className="gallery-grid">
				{pictures &&
					pictures.map((p) => (
						<div className="picture" key={p.id}>
							<img
								src={p.url}
								alt="gallery item"
							/>

							<div className="picture-controllers">
								<button className="picture-controller view" onClick={() => handleViewPicture(p.url)}>
									<i className="fa-solid fa-eye"></i>
								</button>
								<button className="picture-controller trash" onClick={() => handleDeletePicture(p.id)}>
									<i className="fa-solid fa-trash-can"></i>
								</button>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default App;
