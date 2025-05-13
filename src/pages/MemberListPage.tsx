import { useEffect, useState } from "react";
import { fetchMembers } from "../api/member";
import type { Member } from "../types/Member";

function MemberListPage() {
    const [members, setMembers] = useState<Member[]>([]);

    useEffect(() => {
        fetchMembers()
        .then(setMembers)
        .catch((error) => console.error("회원 불러오기 실패:", error));
    }, []);

    return (
        <div>
            <h2>회원 목록</h2>
            <table border={1} cellPadding={8}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이메일</th>
                        <th>이름</th>
                        <th>역할</th>
                        <th>상태</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) => (
                        <tr key={member.id}>
                            <td>{member.id}</td>
                            <td>{member.email}</td>
                            <td>{member.name}</td>
                            <td>{member.role}</td>
                            <td>{member.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );  
}
export default MemberListPage;  