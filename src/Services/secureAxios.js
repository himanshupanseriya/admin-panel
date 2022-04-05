import axios from "axios";
import { ApiPath } from "../API/secure_api";

const secureAxios = axios.create({
    baseURL : ApiPath
})

export default secureAxios;