import React, { useState } from "react";
import { login } from "../api/auth";
import type { LoginInput } from "../types/Auth";


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
            const response = await login(form);
            console.log("Login successful", response);
            localStorage.setItem("accessToken", response.accessToken);
            alert("Login successful");
            // Handle successful login (e.g., redirect to another page, store token, etc.)
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
                <input
                    name="id"
                    value={form.id}
                    onChange={handleChange}
                    placeholder="아이디"
                    /><br />
                <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="비밀번호"
                    /><br />
                    <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default LoginPage;
