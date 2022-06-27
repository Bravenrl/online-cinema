import { ApiRoute } from "@/config/api.config"
import axios from "api/api"

export const AdminService = {
    async getCountUsers() {
        return axios.get<number>(ApiRoute.Users+ApiRoute.Count)
    }
} 