import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBoardById } from "../api/board";
import type { Board } from "../types/Board";
import { deleteBoard } from "../api/board";
import { useNavigate } from "react-router-dom";

function BoardDetailPage() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [board, setBoard] = useState<Board | null>(null);

    const handleDelete = async () => {
        console.log("삭제 버튼 클릭");
        console.log("삭제 시도 ID:", id);
        console.log("board 상태:", board);
        if (!window.confirm("정말 삭제하시겠습니까?")) return;


        try {
            console.log("삭제 요청 ID:", board!.id);
            await deleteBoard(board!.id);
            alert("게시글이 삭제되었습니다.");
            navigate("/boards");
        } catch (error) {
            console.error("게시글 삭제 실패:", error);
            alert("게시글 삭제에 실패했습니다.");
        }

    }

    useEffect(() => {
        if (id) {
            fetchBoardById(Number(id))
                .then((data) => setBoard(data))
                .catch((error) => console.error("상세 조회 실패:", error));
        }
    }, [id]);

    if (!id || isNaN(Number(id))) {
        return <div>잘못된 요청입니다.</div>;
    }

    if (!board) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{board.title}</h1>
            <p>작성자: {board.nickname}</p>
            <p>{board.content}</p>
            <button onClick={handleDelete}>삭제</button>
        </div>
    );
}

export default BoardDetailPage;