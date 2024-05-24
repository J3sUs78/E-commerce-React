
//Importacion de React useState
import { useState } from 'react';


//Importaciones de iconos
import { RiAccountPinCircleFill, RiAlignJustify } from "react-icons/ri"
import { FcAssistant } from "react-icons/fc";
import { IoClose, IoSearchCircleSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";



//componente importado
import Sidebar from './components/shared/Sidebar'


function App() { //componente react
  //1er useState para el menú, inicia como falso
  const [showMenu, setshowMenu] = useState(false);
  //2do 
  const [showOrder, setShowOrder] = useState(false);

  //funcion que ejectua setshowMenu, y convierte showMenu a su estado contrario
  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };


  return (
    <div className='bg-[#262837] w-full min-h-screen'>
      <Sidebar showMenu={showMenu} />

      {/* Menu Movil */}
      <nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>

        <button className='p-2'>
          <RiAccountPinCircleFill />
        </button>
        <button className='p-2'>
          <TbTruckDelivery />
        </button>
        <button className='p-2'>
          <FcAssistant />
        </button>
        {/* Ejecuta la funcion toggleMenu, y aparte cambia el icono a una X para ser mas intuitivo */}
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <IoClose /> : <RiAlignJustify />}
        </button>
      </nav>
      <main className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8 p-4'>
        <div className='lg:col-span-6 '>
          {/*HEADER */}
          <header>
            {/* Title and search */}
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>
              <div>
                <h1 className='text-2xl text-gray-300'>Jhon Floyd</h1>
                <p className='text-gray-500'> 22 mayo 2024</p>
              </div>
              <form >
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
              <a href="#" className='relative py-2 pr-4 border-[#ec7c6a] text-[#ec7c6a] before:w-1/2 before:h-[2px] before:absolute  before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]'> Nuestros Productos</a>
              <a href="#" className=' py-2 pr-4 ' > Ofertas Especiales</a>
              <a href="#" className=' py-2 pr-4'> Quienes Somos</a>
              <a href="#" className=' py-2 pr-4'> Recicla Con Nosotros</a>
              <a href="#" className=' py-2'> Trabajo Personalizado</a>
            </nav>

          </header>

          {/* Title content */}
          <div className='flex items-center justify-between mb-8'>
            <h2 className='text-xl text-gray-300'> Exclusivo para ti</h2>
            <button className='flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
              <IoIosArrowDown /> Tipo prod
            </button>
          </div>
        </div>

        {/* Content */}
        <div>
          {/* Card */}
          <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center'>
            <img src="pinturegreen-removebg.png" className='w-40 h-45 object-cover -mt-20'/>
          </div>
        </div>

        <div className='lg:col-span-2 fixed lg:static right-0'>
          carrito
        </div>
      </main>
    </div>
  )
}

export default App
