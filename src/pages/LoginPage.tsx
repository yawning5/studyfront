import React, { useState } from "react";
import { login } from "../api/auth";
import { fetchMyInfo } from "../api/member";
import { setAuthToken } from "../api/auth";
import type { LoginInput } from "../types/Auth";
import Button from "../components/Button";
import Input from "../components/input";
import useUserStore from "../stores/useUserStore";


function LoginPage() {

    

    const [form, setForm] = useState<LoginInput>({
        id: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async ( e: React.FormEvent) => {
        e.preventDefault();
        try {

            const { setUser } = useUserStore(); // zustnand 훅

            const response = await login(form);
            console.log("Login successful", response);
            localStorage.setItem("accessToken", response.accessToken);
            setAuthToken(response.accessToken);
            alert("Login successful");
            // Handle successful login (e.g., redirect to another page, store token, etc.)
            const myInfo = await fetchMyInfo();
            console.log("My info fetched", myInfo);
            setUser({
                email: myInfo.email,
                nickname: myInfo.nickname,
            });
        } catch (error) {
            console.error("Login failed", error);
            alert("Login failed");
            // Handle login failure (e.g., show error message)
        }
    };

    return (
        <div>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    name="id"
                    value={form.id}
                    onChange={handleChange}
                    placeholder="아이디"
                    /><br />
                <Input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="비밀번호"
                    /><br />
                    <Button type="submit">로그인</Button>
            </form>
        </div>
    );
}

export default LoginPage;
