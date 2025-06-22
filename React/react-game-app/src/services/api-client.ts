import axios, { CanceledError } from "axios";

export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  //  headers: "api-key", optionally set the header that will be sent with every http request like an api ley 
})

export {CanceledError}