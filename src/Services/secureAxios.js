import axios from "axios";

const secureAxios = axios.create({
    baseURL: 'http://192.168.0.181:3001',//process.env.REACT_APP_API_PATH
})

export default secureAxios;