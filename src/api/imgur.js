import qs from 'qs';
import axios from 'axios';
import { Promise } from 'core-js/library/web/timers';
const CILENT_ID = 'f1ba8778223aa20';
const ROOT_URL = 'https://api.imgur.com';
// const HELPER_URL = "https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE"
export default {
	login() {
		const querystring = {
			client_id: CILENT_ID,
			response_type: 'token'
		};
		window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
	},

	fetchImages(token) {
		return axios.get(`${ROOT_URL}/3/account/me/images`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	},

	uploadImages(images, token) {
		const promises = Array.from(images).map(image => {
			const formData = new formData();
			formData.append('image', image);

			return axios.post(`${ROOT_URL}/3/image`, formData, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
		});
		return Promise.all(promises);
	}
};