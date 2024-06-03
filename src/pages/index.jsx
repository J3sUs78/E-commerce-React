import { useState,useEffect } from 'react';
import { auth } from "../components/shared/firebase";

import { useNavigate } from 'react-router-dom';



//Importaciones de iconos
import { RiAccountPinCircleFill, RiAlignJustify } from "react-icons/ri"
import { FcAssistant } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

import Sidebar from '../components/shared/Sidebar';
import Car from '../components/shared/Car';
import Header from '../components/shared/Header';
import Card from '../components/shared/Card';
import Register from '../components/shared/Register';
import Login from '../components/shared/Login';


//User
export const Registerp = () => {
    return (
        <Register />
    );
};

export const Loginp = () => {
    return (
        <Login />
    );
};

export const Delivery = () => <h1>Delivery page(Public)</h1>;

export const Home = () => {
    const [user, setUser] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                // Si hay un usuario logueado, establecerlo en el estado
                setUser(user);
            } else {
                // Si no hay usuario logueado, redirigir al usuario a la página de inicio de sesión
                nav('/login');
            }
        });

        // Limpiar el efecto cuando el componente se desmonte
        return () => unsubscribe();
    }, [nav]);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleOrders = () => {
        setShowOrder(!showOrder);
        setShowMenu(false);
    };

    return (
        <div className='bg-[#262837] w-full min-h-screen'>
            <Sidebar showMenu={showMenu} user={user} />
            <Car showOrder={showOrder} setShowOrder={setShowOrder} user={user} />
            {/* Mobile Menu */}
            <nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
                <button className='p-2' onClick={() => nav('profile')}>
                    <RiAccountPinCircleFill />
                </button>
                <button className='p-2' onClick={toggleOrders}>
                    <MdOutlineShoppingCartCheckout />
                </button>
                <button className='p-2'>
                    <FcAssistant />
                </button>
                <button onClick={toggleMenu} className="text-white p-2">
                    {showMenu ? <IoClose /> : <RiAlignJustify />}
                </button>
            </nav>
            {/* MAIN */}
            <main className='lg:pl-32 lg:pr-96 pb-20'>
                <div className='md:p-8 p-4'>
                    {/* HEADER */}
                    <Header userInfo={user ? { name: user.displayName, date: new Date().toLocaleDateString() } : null} />
                    {/* Title content */}
                    <div className='flex items-center justify-between mb-16'>
                        <h2 className='text-xl text-gray-300'>Exclusivo para ti</h2>
                        <button className='flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
                            <IoIosArrowDown /> Tipo prod
                        </button>
                    </div>
                </div>
                {/* Content */}
                <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                    {/* Card */}
                    <Card img='pinturerosa-removebg-.png' description='Brocha de cerdas sintéticas más pintura acrílica rosa.' price='$30.000' inventory='11 unidades restantes' />
                    <Card img='pinturegreen-removebg.png' description='Brocha de cerdas sintéticas más pintura acrílica turquesa.' price='$26.000' inventory='14 unidades restantes' />
                </div>
            </main>
        </div>
    );
};


export const Profile = () => {
    const nav = useNavigate();


    return (
        user ? (
            <div className="bg-[#262837] text-gray-300 min-h-screen">
                <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-2xl font-bold">Perfil</h1>
                        <button
                            onClick={() => nav(-1)}
                            className="bg-[#1F1D2B] text-gray-300 px-4 py-2 rounded-lg hover:bg-[#2a2839]">
                            Volver
                        </button>
                    </div>

                    <div className="bg-[#1F1D2B] rounded-lg p-8 shadow-lg">
                        {/* Contenido del perfil */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-xl font-bold mb-4">Información personal</h2>
                                {/* Aquí puedes agregar los campos de información personal */}
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mb-4">Ajustes de cuenta</h2>
                                {/* Aquí puedes agregar los campos de ajustes de cuenta */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <Login />
        )
    );
};

//Admin
export const Analytics = () => <h1>Analitycs page(Private)</h1>;

export const Dashboard = () => <h1>AddProd page(Private)</h1>;

