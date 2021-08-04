import axios from "axios";

const instance = axios.create({
	baseURL: "https://teender-clone-backend.herokuapp.com/",
});

export default instance;
