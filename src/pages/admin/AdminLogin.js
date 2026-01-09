import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function AdminLogin() {
    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const baseURL = "https://localhost:7292";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseURL}/api/Account/SignIn`, {
                email: emailOrUsername,
                password: password,
            });

            const token = response.data.token;
            const tokenParts = token.split(".");
            const payload = JSON.parse(atob(tokenParts[1]));
            const role = payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

            if (role !== "SuperAdmin") {
                Swal.fire("Error", "You don't have admin rights", "error");
                return;
            }

            localStorage.setItem("token", token);
            localStorage.setItem("role", role);

            Swal.fire("Success", "Welcome, Admin!", "success");
            navigate("/admin/dashboard");
        } catch (error) {
            Swal.fire("Error", "Invalid credentials or server error", "error");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "400px" }}>
            <h4 className="mb-2">Welcome to Fiorello! 👋</h4>
            <p className="mb-4">Please sign in to your account and start the adventure</p>

            <form className="mb-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email or Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email or username"
                        value={emailOrUsername}
                        onChange={(e) => setEmailOrUsername(e.target.value)}
                        autoFocus
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password</label>
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            className="input-group-text"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ cursor: "pointer" }}
                        >
                            <i className={`bx ${showPassword ? "bx-show" : "bx-hide"}`}></i>
                        </span>
                    </div>
                </div>

                <div className="mb-3">
                    <button className="btn btn-primary w-100" type="submit">
                        Sign In
                    </button>
                </div>
            </form>

            <p className="text-center">
                <a href="/">
                    <span>Back to Website</span>
                </a>
            </p>
        </div>
    );
}

export default AdminLogin;
