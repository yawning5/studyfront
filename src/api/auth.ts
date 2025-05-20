import axios from "axios";
import type { LoginInput, JwtResponse } from "../types/Auth";

export const login = async (data: LoginInput): Promise<JwtResponse> => {
    const response = await axios.post<JwtResponse>("http://localhost:8080/login", data);
    return response.data;
};

export const setAuthToken = (token: string) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}