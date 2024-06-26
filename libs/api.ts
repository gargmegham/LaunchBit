import axios from "axios"
import { toast } from "react-hot-toast"

const apiClient = axios.create({
    baseURL: "/api",
})

apiClient.interceptors.response.use(
    function (response) {
        return response.data
    },
    function (error) {
        let message = ""
        message = error?.response?.data?.error || error.message || error.toString()
        error.message = typeof message === "string" ? message : JSON.stringify(message)
        if (error.message) {
            toast.error(error.message)
        } else {
            toast.error("something went wrong...")
        }
        return Promise.reject(error)
    }
)

export default apiClient
