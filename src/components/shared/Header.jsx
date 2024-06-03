import { useEffect, useState } from 'react';
import axios from 'axios';
import { IoSearchCircleSharp } from "react-icons/io5";

const Header = ({ userInfo }) => {

    const name = userInfo?.name || "Precios que Pintan!";
    const [date, setDate] = useState('');

    useEffect(() => {
        const fetchDate = async () => {
            try {
                const response = await axios.get("http://worldtimeapi.org/api/timezone/America/Santiago");
                const dateTime = new Date(response.data.datetime);
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                const formattedDate = dateTime.toLocaleDateString('es-ES', options);
                setDate(formattedDate);
            } catch (error) {
                console.error("Error fetching date:", error);
            }
        };

        fetchDate();
    }, []);

    return (
        <header>
            {/* Title and search */}
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>
                <div>
                    <h1 className='text-2xl text-gray-300'>{name}</h1>
                    <p className='text-gray-500'>{date}</p>
                </div>
                <form>
                    <div className='w-full relative'>
                        <IoSearchCircleSharp className='text-3xl absolute left-1 top-1/2 -translate-y-1/2 text-gray-300' />
                        <input
                            type="text"
                            className='bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none'
                            placeholder='Busquemos'
                        />
                    </div>
                </form>
            </div>
            {/*  TABS */}
            <nav className='text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6'>
                <a href="#" className='relative py-2 pr-4 border-[#ec7c6a] text-[#ec7c6a] before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]'>Nuestros Productos</a>
                <a href="#" className='py-2 pr-4'>Ofertas Especiales</a>
                <a href="#" className='py-2 pr-4'>Quienes Somos</a>
                <a href="#" className='py-2 pr-4'>Recicla Con Nosotros</a>
                <a href="#" className='py-2'>Trabajo Personalizado</a>
            </nav>
        </header>
    );
};

export default Header;
