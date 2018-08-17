import Axios from "axios"

export default {
	base:"http://127.0.0.1:3001",

	async get(url){
		let response = await Axios.get(`${this.base}${url}`);
		return response.data;
	},

	async post(url,data){
		let formData = new FormData();
		for(let key in data)
		{
			formData.append(key,data[key]);
		}
		let response = await Axios.post(`${this.base}${url}`,formData);
		return response.data;
	},

	interceptors(view){
		Axios.interceptors.request.use( config => {
			view.isLoading = true;
			return config;
		}, error => {
			view.$Message.error({
				content:`网络错误，${error}.`
			})
			return Promise.reject(error);
		});
		
		Axios.interceptors.response.use( response => {
			view.isLoading = false;
			return response;
		}, error => {
			view.$Message.error({
				content:`网络错误，${error}.`
			})
			return Promise.reject(error);
		});
	}
}