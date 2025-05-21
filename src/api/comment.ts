import axios from "axios"
import type { CommentPostInput } from "../types/Comment";

export const postComment = async (
    boardId: number,
    data: CommentPostInput
): Promise<void> => {
    await axios.post(`http://localhost:8080/board/${boardId}/comment`, data);
};