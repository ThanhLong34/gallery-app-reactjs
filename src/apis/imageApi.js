const BASE_API = import.meta.env.VITE_BASE_API_URL;
const imageExts = ["jpeg", "jpg", "jfif", "png", "gif", "webp"];

export async function uploadImage(imageFile) {
	// Check file extensions
	if (!imageExts.includes(imageFile.type.split("/")[1])) {
		console.error("Chỉ chấp nhận các định dạng file sau: " + imageExts.join(" | "));
		return false;
	}

	// Create form data
	const formData = new FormData();
	formData.append("image", imageFile); // key 'image' is requires

	// Call api
	const response = await fetch(`${BASE_API}/image/upload.php`, {
		method: "POST",
		body: formData,
	});

	// Get data
	const data = await response.json();

	return data;
}

export async function getImageList(params) {
	// Create URL params
	const _params = new URLSearchParams(params);

	// Call api
	const response = await fetch(`${BASE_API}/image/getList.php?${_params}`, {
		method: "GET"
	});

	// Get data
	const data = await response.json();

	return data;
}

export async function deleteImage(id) {
	// Call api
	const response = await fetch(`${BASE_API}/image/delete.php`, {
		method: "DELETE",
		body: JSON.stringify({ id })
	});

	// Get data
	const data = await response.json();

	return data;
}
