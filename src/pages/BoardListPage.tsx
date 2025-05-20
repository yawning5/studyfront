import { useEffect, useState } from "react";    
import { fetchBoards } from "../api/board";
import type { Board } from "../types/Board";   
import { Link } from "react-router-dom";

function BoardListPage() {
    const [boards, setBoards] = useState<Board[]>([]);

    useEffect(() => {
        fetchBoards()
        .then(setBoards)
        .catch((error) => console.error("게시판 불러오기 실패:", error));
    }, []);

    return (
        <div>
            <h2>게시판 목록</h2>
            <table border={1} cellPadding={8}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>댓글 수</th>
                    </tr>
                </thead>
                <tbody>
                    {boards.map((board) => (
                        <tr key={board.id}>
                            <td>{board.id}</td>
                            <td>
                                <Link to={`/board/${board.id}`}>{board.title}</Link>
                            </td>
                            <td>{board.nickname}</td>
                            <td>{board.commentCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BoardListPage;