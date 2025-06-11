import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, loginSuccess } from "../redux/auth/authSlice";
import type { AppDispatch, RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { token } = useSelector((state: RootState) => state.auth);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginRequest({ email, password }));
    };

    // Restore token from localStorage
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedToken && storedUser && !token) {
            dispatch(loginSuccess({ token: storedToken, user: JSON.parse(storedUser) }));
        }
    }, [dispatch, token]);

    // Redirect to dashboard if token exists
    useEffect(() => {
        if (token) {
            navigate("/dashboard");
        }
    }, [token, navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <form onSubmit={handleLogin} className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome Back</h2>
                <div className="space-y-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
                    />
                    <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                        Login
                    </button>
                </div>
                <p className="text-sm mt-4 text-center text-gray-600">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-green-500 hover:underline">
                        Sign Up
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Login;
