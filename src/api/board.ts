import axios from "axios"; 
import type { Board } from "../types/Board";   

const BASE_URL = "http://localhost:8080";

export const fetchBoards = async (): Promise<Board[]> => {
    const response = await axios.get(`${BASE_URL}/board`);
    return response.data;
};