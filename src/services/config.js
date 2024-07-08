import axios from "axios";

const Api = axios.create({baseURL: "https://fakestoreapi.com"})

Api.interceptors.response.use(response => response.data,error => Promise.reject(error))

export default Api;