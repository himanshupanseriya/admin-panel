import axios from "axios";

const secureAxios = axios.create({
    baseURL : process.env.REACT_APP_API_PATH
})

export default secureAxios;