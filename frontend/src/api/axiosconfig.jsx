import axios from "axios";

const instance = axios.create({
    baseURL: "https://json-server-as3m.onrender.com/",
});

export default instance;