interface PostData {
	model: string;
	article: string;
}

export function postContents(content: string, model: string) {
	const postModel = model;
	const data: PostData = {
		model: postModel,
		article: content
	};
	return postData(`http://18.182.126.246/api/demo`, data);
}

function arrangePostData(url:string){

}

// GETメソッドの実装

function postData(url = ``, data = {}) {
	return fetch(url, {
		method: "GET",
		mode: "cors",
		credentials: "same-origin",
		headers: {
			"Content-Type": "text/plain"
		},
		redirect: "follow",
		referrer: "no-referrer",
		body: JSON.stringify(data)
	}).then(response => response.text());
}
