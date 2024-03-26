import React from 'react'
import { RiHomeSmileFill } from "react-icons/ri";
import { GiShop } from "react-icons/gi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";


// Componente Sidebar

const Sidebar = () => {
    return (
        <div // Contenedor principal de la barra lateral
            className="bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full"
        >
            {/* Lista de enlaces */}
            <ul className="pl-4">
                {/* Logo */}
                <li>
                    <h1 className="text-2xl text-gray-50 uppercase font-bold text-center my-5">
                        LOGO
                    </h1>
                </li>

                {/* Primera opción (Home) */}
                <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
                    <a // Enlace
                        href="#"
                        className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white"
                    >
                        <RiHomeSmileFill className="text-2xl" /> {/* Icono de casa sonriente */}
                    </a>
                </li>

                {/* Segunda opción (Shop) */}
                <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <a // Enlace
                        href="#"
                        className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
                    >
                        <GiShop className="text-2xl" /> {/* Icono de tienda */}
                    </a>
                </li>

                {/* Tercera opción (Cart) */}
                <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                    <a // Enlace
                        href="#"
                        className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
                    >
                        <MdOutlineShoppingCartCheckout className="text-2xl" /> {/* Icono de carrito de compras */}
                    </a>
                </li>
            </ul>
        </div>
    );
};

// Exportar el componente para su uso en otras partes de la aplicación
export default Sidebar;