import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines",
    headers: {
        "Content-Type": "text/plain",
    },
    json: true
});
const api_key = "4feab808b1014a288e15d01e8cf0b9d3";
const country = "br";

export const api = {
    get(categoria, pagina) {
        return axiosInstance.get(`?country=${country}&category=${categoria}&pageSize=10&page=${pagina}&apiKey=${api_key}`);
    }
};