import axios from "axios";
import type { MemberInfo } from "../types/Member";

export const fetchMyInfo = async (): Promise<MemberInfo> => {
    const response = await axios.get(`http://localhost:8080/member/my`);
    return response.data;
}