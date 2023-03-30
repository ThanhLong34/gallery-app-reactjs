import { useState } from "react";

function App() {
	const [pictures, setPictures] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

	return (
		<div className="App">
			<h1 className="title">GALLERY APP</h1>
			<div className="flex-center">
				<button className="btn btn-secondary">Upload image</button>
			</div>
			<div className="gallery-grid">
				{pictures &&
					pictures.map((p, idx) => (
						<div className="picture" key={idx}>
							<img
								src="https://images.unsplash.com/photo-1679926591722-79bff79c561a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
								alt="gallery item"
							/>
						</div>
					))}
			</div>
		</div>
	);
}

export default App;
