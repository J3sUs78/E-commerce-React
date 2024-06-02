import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "../shared/SignInWithGoogle";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const nav = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in Successfully");
            window.location.href = "/profile";
            toast.success("User logged in Successfully", {
                position: "top-center",
            });
        } catch (error) {
            console.log(error.message);
            toast.error("Ingresa tus datos correctamente", {
                position: "bottom-center",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-[#262837] text-gray-300 p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10">
            <h3 className="text-xl font-bold mb-6">Ingresa a tu cuenta</h3>

            <div className="mb-4">
                <label className="block text-sm mb-2">Correo electrónico:</label>
                <input
                    type="email"
                    className="bg-[#1F1D2B] p-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-[#ec7c6a]"
                    placeholder="Ingresa tu correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-6">
                <label className="block text-sm mb-2">Contraseña:</label>
                <input
                    type="password"
                    className="bg-[#1F1D2B] p-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-[#ec7c6a]"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <button type="submit" className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg hover:bg-[#d96d5f] transition-colors">
                    Ingresar
                </button>
            </div>
            <p className="text-right text-sm">
                No tienes cuenta? <a onClick={() => nav("/register")} className="text-[#ec7c6a] hover:underline">Registrate</a>
            </p>
            <SignInwithGoogle />
        </form>
    );
}

export default Login;
