import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBoardById } from "../api/board";
import type { Board } from "../types/Board";

function BoardDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [board, setBoard] = useState<Board | null>(null);

    useEffect(() => {
        if (id) {
            fetchBoardById(Number(id))
                .then((data) => setBoard(data))
                .catch((error) => console.error("상세 조회 실패:", error));
        }
    }, [id]);

    if (!board) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{board.title}</h1>
            <p>작성자: {board.nickname}</p>
            <p>{board.content}</p>
        </div>
    );
}

export default BoardDetailPage;