import Axios from "axios"

export default {
	base:"http://localhost:3001/api",

	async get(url,data){
		let link = `${this.base}${url}`;
		if(data){
			link += "?";
		}
		for(let key in data){
			link += `${key}=${data[key]}`; 
		}
		let response = await Axios.get(link);
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
			config.withCredentials = true;
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