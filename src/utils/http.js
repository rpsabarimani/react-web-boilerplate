import axios from 'axios';
import { AppConstants, API_BASE_URL } from '../constants';

const { contentTypeKey, applicationJson } = AppConstants.contentType;
const options = {
	headers: {
		[contentTypeKey]: applicationJson
	}
};

class Http {
	get = (url) => {
		const apiUrl = `${API_BASE_URL}${url}`;

		const accessToken = localStorage.getItem('access_token');
		if (accessToken) options.headers.Authorization = `Token ${accessToken}`;

		return axios.get(apiUrl, options);
	};

	post = (url, data = {}) => {
		const apiUrl = `${API_BASE_URL}${url}`;
		const accessToken = localStorage.getItem('access_token');
		if (accessToken) options.headers.Authorization = `Token ${accessToken}`;

		return axios.post(apiUrl, data, options);
	};

	put = (url, data = {}) => {
		const apiUrl = `${API_BASE_URL}${url}`;
		const accessToken = localStorage.getItem('access_token');
		if (accessToken) options.headers.Authorization = `Token ${accessToken}`;

		return axios.put(apiUrl, data, options);
	};
	patch = (url, data = {}) => {
		const apiUrl = `${API_BASE_URL}${url}`;
		const accessToken = localStorage.getItem('access_token');
		if (accessToken) options.headers.Authorization = `Token ${accessToken}`;

		return axios.patch(apiUrl, data, options);
	};
	delete = (url, data = {}) => {
		const apiUrl = `${API_BASE_URL}${url}`;
		const accessToken = localStorage.getItem('access_token');
		if (accessToken) options.headers.Authorization = `Token ${accessToken}`;

		return axios.delete(apiUrl, options);
	};
	postProgress = (url, data = {}, uploadProgress) => {
		const apiUrl = `${API_BASE_URL}${url}`;
		const accessToken = localStorage.getItem('access_token');
		if (accessToken) options.headers.Authorization = `Token ${accessToken}`;
		options.onUploadProgress = progressEvent => uploadProgress(progressEvent.loaded)

		return axios.post(apiUrl, data, options);
	};
	patchProgress = (url, data = {}, uploadProgress) => {
		const apiUrl = `${API_BASE_URL}${url}`;
		const accessToken = localStorage.getItem('access_token');
		if (accessToken) options.headers.Authorization = `Token ${accessToken}`;
		if (uploadProgress) options.onUploadProgress = progressEvent => uploadProgress(progressEvent.loaded)

		return axios.patch(apiUrl, data, options);
	};
	getAll = (urls) => {

		const accessToken = localStorage.getItem('access_token');
		if (accessToken) options.headers.Authorization = `Token ${accessToken}`;

		const requests = urls.map((url) => axios.get(`${API_BASE_URL}${url}`, options));
		return Promise.all(requests)
	};
}

export default new Http();
