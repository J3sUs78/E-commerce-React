import React from 'react'
import { RiHomeSmileFill, RiAccountPinCircleFill,RiLogoutCircleRFill  } from "react-icons/ri";
import { GiShop } from "react-icons/gi";
import { MdOutgoingMail } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";


// Componente Sidebar

const Sidebar = (props) => {

    const {showMenu} = props;


    return (
        <div // Contenedor principal de la barra lateral
            className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${ showMenu ?  "left-0" : "-left-full" } `} //usar corchetes para usar variables
        >
            <div>{/* Lista de enlaces */}
                <ul className="pl-4">
                    {/* Logo */}
                    <li>
                        <h1 className="text-2xl text-gray-50 uppercase font-bold text-center my-5">
                            LOGO
                        </h1>
                    </li>

                    {/* Primera opción (shop) */}
                    <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
                        <a // Enlace
                            href="#"
                            className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white"
                        >
                            <GiShop className="text-2xl" /> {/* Icono de casa tienda */}
                        </a>
                    </li>

                    {/* Segunda opción (Shop) */}
                    <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a // Enlace
                            href="#"
                            className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
                        >
                            <RiHomeSmileFill className="text-2xl" /> {/* Icono de  */}
                        </a>
                    </li>

                    {/* Tercera opción (Cart) */}
                    <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a // Enlace
                            href="#"
                            className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
                        >
                            <TbTruckDelivery className="text-2xl" /> {/* Icono de carrito de compras */}
                        </a>
                    </li>

                    {/* Cuarta opción (profile) */}
                    <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a // Enlace
                            href="#"
                            className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
                        >
                            <RiAccountPinCircleFill className="text-2xl" /> {/* Icono de user */}
                        </a>
                    </li>

                    {/* Quinta opción (Mail) */}
                    <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a // Enlace
                            href="#"
                            className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
                        >
                            <MdOutgoingMail className="text-2xl" /> {/* Icono de carrito de compras */}
                        </a>
                    </li>
                </ul>
            </div>
            <div>  {/* Logout */}
                <ul>
                    
                    <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
                        <a // Enlace
                            href="#"
                            className="bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white"
                        >
                            <RiLogoutCircleRFill  className="text-2xl" /> {/* Icono logout */}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

// Exportar el componente para su uso en otras partes de la aplicación
export default Sidebar;