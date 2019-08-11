import { SearchQuery } from "compass-map";

interface PostData {
	model: string;
	article: string;
}

export function postContents(query:SearchQuery) {
    const url:string = arrangePostData('https://connpass.com/api/v1/event/?',query)
	return postData(url);
}

function arrangePostData(url: string, query: SearchQuery) {
	let returnUrl = url;
	const queryKeys = Object.keys(query);
	queryKeys.forEach((key: string) => {
		const value: number | number[] | string[] = query[key];
		if (typeof value === "number") {
			returnUrl += "&" + key + "=" + value.toString();
		} else if (value.length !== 0) {
			returnUrl += "&" + key + "=";
			for (let index: number = 0; index < value.length; index++) {
				if (typeof value[index] === "number") {
					if (index === value.length - 1) {
						returnUrl += value[index];
					} else {
						returnUrl += value[index].toString() + ",";
					}
				}else{
                    if (index === value.length - 1) {
						returnUrl += value[index];
					} else {
						returnUrl += value[index] + ",";
					}
                }
			}
		}
    });
    return returnUrl
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
