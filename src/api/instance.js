import axios from "axios"
const instance = axios.create({
    baseURL: "https://portfolio-lqvinh1205.herokuapp.com/api"
})

export default instance