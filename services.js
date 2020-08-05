import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines",
    headers: {
        "Content-Type": "text/plain",
    },
    json: true
});
const api_key = "374efa4078db4f3b9346aefc4e9ff54e";
const country = "br";

export const api = {
    get(categoria) {
        return axiosInstance.get(`?country=${country}&category=${categoria}&apiKey=${api_key}`);
    }
};