import React from 'react';
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Car = ({ showOrder, setShowOrder, user }) => {
    const classBtnCart = 'text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500';
    const nav = useNavigate();
    return (
        <div className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${showOrder ? "right-0" : "-right-full"}`}>
            <div className='relative pt-16 lg:pt-5 text-gray-300 p-8 h-full '>
                <IoClose
                    onClick={() => setShowOrder(false)}
                    className='lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-2xl'
                />
                <h1 className='text-2xl my-4'>Tu Carrito... 😀</h1>
                {user ? (
                    <>
                        <div className='flex items-center gap-4 flex-wrap mb-8'>
                            <button className='bg-[#ec7c6a] text-white py-2 px-4 rounded-xl'>
                                Mis Items
                            </button>
                            <button className={classBtnCart}>
                                Mis Datos
                            </button>
                            <button className={classBtnCart}>
                                Mis Cupones
                            </button>
                        </div>
                        <div>
                            <div className='grid grid-cols-6 mb-4 p-2 gap-4'>
                                <h5 className='col-span-4 text-sm'>Item</h5>
                                <h5 className='justify-self-end'>Cantidad</h5>
                                <h5 className='justify-self-end'>Costo Total</h5>
                            </div>
                            <div className='h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll'>
                                {/* Aquí irían los productos del carrito */}
                                {/* Product component should go here */}
                            </div>
                        </div>
                        <div className='bg-[#262837] absolute w-full bottom-0 left-0 p-4'>
                            <div className='flex items-center justify-between mb-4'>
                                <span className='text-gray-400'>Descuento</span>
                                <span>$ 10.000</span>
                            </div>
                            <div className='flex items-center justify-between mb-6'>
                                <span className='text-gray-400'>Subtotal</span>
                                <span>$ 254.000</span>
                            </div>
                            <div>
                                <button className='bg-[#ec7c6a] w-full py-2 px-4 rounded-lg '>
                                    Continuar con el pago...
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='text-center'>
                        <p className='text-gray-400 mb-4'>Tu carrito está vacío. Por favor, <span className='text-[#ec7c6a] cursor-pointer' onClick={() => nav("register")}>regístrate</span> para añadir productos.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Car;
