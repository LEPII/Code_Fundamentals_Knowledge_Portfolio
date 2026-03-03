import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

class APIClient {
    endpoint: string;

constructor(endpoint: string) {
    this.endpoint = endpoint;
}}