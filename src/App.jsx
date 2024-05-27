
//Importacion de React useState
import { useState } from 'react';
import {ReactDOM} from 'react-dom/client';



//Importaciones de iconos
import { RiAccountPinCircleFill, RiAlignJustify } from "react-icons/ri"
import { FcAssistant } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";




//componente importado
import Sidebar from './components/shared/Sidebar'
import Car from './components/shared/Car';
import Header from './components/shared/Header';
import Card from './components/shared/Card';


function App() { //componente react
  //1er useState para el menú, inicia como falso
  const [showMenu, setshowMenu] = useState(false);
  //2do 
  const [showOrder, setShowOrder] = useState(false);

  //funcion que ejectua setshowMenu, y convierte showMenu a su estado contrario
  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setshowMenu(false);
  };



  return (
    <div className='bg-[#262837] w-full min-h-screen'>
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* Menu Movil */}
      <nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
        <button className='p-2'>
          <RiAccountPinCircleFill />
        </button>
        <button className='p-2' onClick={toggleOrders}>
          <MdOutlineShoppingCartCheckout />
        </button>
        <button className='p-2'>
          <FcAssistant />
        </button>
        {/* Ejecuta la funcion toggleMenu, y aparte cambia el icono a una X para ser mas intuitivo */}
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <IoClose /> : <RiAlignJustify />}
        </button>
      </nav>
      {/* MAIN */}
      <main className='lg:pl-32 lg:pr-96 pb-20'>
        <div className='md:p-8 p-4'>
          {/*HEADER */}
          <Header />
          {/* Title content */}
          <div className='flex items-center justify-between mb-16'>
            <h2 className='text-xl text-gray-300'> Exclusivo para ti</h2>
            <button className='flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
              <IoIosArrowDown /> Tipo prod
            </button>
          </div>
        </div>
        {/* Content */}
        <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
          {/* Card */}
          <Card img='pinturerosa-removebg-.png' description='Brocha de cerdas sintéticas más pintura acrílica.' price='$30.000' inventory='11 unidades restantes' />
          {/* Card */}
          <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center'>
            <img
              src="pinturegreen-removebg.png"
              className='w-40 h-45 object-cover -mt-20 shadow-2xl rounded-full'
            />
            <p className='text-xl'> Brocha de cerdas sintéticas más pintura acrílica. </p>
            <span className='text-gray-400'> $28.000</span>
            <p className='text-gray-600'> 14 unidades restantes </p>
          </div>
        </div>
      </main>
      
    </div>
  )
}

export default App
