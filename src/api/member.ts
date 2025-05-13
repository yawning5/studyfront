import axios from "axios";
import type { Member } from "../types/Member";

const BASE_URL = "http://localhost:8080";

export const fetchMembers = async (): Promise<Member[]> => {
    const response = await axios.get(`${BASE_URL}/members`);
        return response.data;
    };