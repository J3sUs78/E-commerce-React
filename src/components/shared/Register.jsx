import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            await setDoc(doc(db, "Users", user.uid), {
                email: user.email,
                firstName,
                lastName,
                photo: ""
            });

            toast.success("¡Registro exitoso!", { position: "top-center" });
            nav("/login");
        } catch (error) {
            console.error("Error durante el registro:", error);
            toast.error(error.message, { position: "bottom-center" });
        }
    };

    return (
        <form onSubmit={handleRegister} className="bg-[#262837] text-gray-300 p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10">
            <h3 className="text-xl font-bold mb-6">Regístrate</h3>

            <div className="mb-4">
                <label className="block text-sm mb-2">Nombre</label>
                <input
                    type="text"
                    className="bg-[#1F1D2B] p-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-[#ec7c6a]"
                    placeholder="Roberto"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm mb-2">Apellido</label>
                <input
                    type="text"
                    className="bg-[#1F1D2B] p-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-[#ec7c6a]"
                    placeholder="Ayala"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm mb-2">Correo</label>
                <input
                    type="email"
                    className="bg-[#1F1D2B] p-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-[#ec7c6a]"
                    placeholder="roberto@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="mb-6">
                <label className="block text-sm mb-2">Contraseña</label>
                <input
                    type="password"
                    className="bg-[#1F1D2B] p-2 w-full rounded-lg outline-none focus:ring-2 focus:ring-[#ec7c6a]"
                    placeholder="******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className="mb-4">
                <button type="submit" className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg hover:bg-[#d96d5f] transition-colors">
                    Regístrate
                </button>
            </div>
            <p className="text-right text-sm">
                ¿Ya tienes una cuenta? <a onClick={() => nav("/login")} className="text-[#ec7c6a] hover:underline">Iniciar sesión</a>
            </p>
        </form>
    );
}

export default Register;
