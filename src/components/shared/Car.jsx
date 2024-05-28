import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri"
import { IoClose } from "react-icons/io5";




const Card = (props) => {
    const { showOrder, setShowOrder } = props;
    const classBtnCart = 'text-[#ec7c6a]  py-2 px-4 rounded-xl border border-gray-500';

    return (
        <div className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${showOrder ? "right-0" : "-right-full"}`}>
            {/* Orders */}
            <div className='relative pt-16 lg:pt-5 text-gray-300 p-8 h-full '>
                <IoClose
                    onClick={() => setShowOrder(false)}
                    className='lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-2xl'
                />
                <h1 className='text-2xl my-4'> Tu Carrito... 😀</h1>
                {/* Buttons Pills */}
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
                {/* Car */}
                <div>
                    <div className='grid grid-cols-6 mb-4 p-2 gap-4'>
                        <h5 className='col-span-4 text-sm'>Item</h5>  {/* Reduced font size */}
                        <h5 className='justify-self-end'>Cantidad</h5>
                        <h5 className='justify-self-end'>Costo Total</h5>
                    </div>

                    {/* Products */}
                    <div className='h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll'>
                        {/* Product */}
                        <div className='bg-[#262837] p-4 rounded-xl mb-4'>
                            <div className='grid grid-cols-6 mb-4'>
                                {/* Product description */}
                                <div className='col-span-4 flex items-center gap-3'>
                                    <img src="dosx1-removebg.png" className='w-10 h-10 object-cover' />
                                    <div>
                                        <h5 className='text-sm'> Kit de pintura verde todo en uno...</h5>
                                        <p className='text-xs text-gray-500'>$33.000</p>
                                    </div>
                                </div>
                                {/*Cant */}
                                <div>
                                    <button>
                                        <span>
                                            2
                                        </span>
                                    </button>
                                </div>
                                {/*Precio */}
                                <div>
                                    <span>$66.000</span>
                                </div>
                            </div>
                            {/* Note */}
                            <div className='grid grid-cols-6 items-center'>
                                <form className='col-span-5'>
                                    <input
                                        className='bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none'
                                        type="text"
                                        placeholder='Agrega un comentario'
                                    />
                                </form>
                                <div>
                                    <button className='p-2 rounded-lg border-red-500 border'>
                                        <RiDeleteBin6Line className='text-red-500' />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product */}
                        <div className='bg-[#262837] p-4 rounded-xl mb-4'>
                            <div className='grid grid-cols-6 mb-4'>
                                {/* Product description */}
                                <div className='col-span-4 flex items-center gap-3'>
                                    <img src="dosx1-removebg.png" className='w-10 h-10 object-cover' />
                                    <div>
                                        <h5 className='text-sm'> Kit de pintura verde todo en uno...</h5>
                                        <p className='text-xs text-gray-500'>$33.000</p>
                                    </div>
                                </div>
                                {/*Cant */}
                                <div>
                                    <button>
                                        <span>
                                            2
                                        </span>
                                    </button>
                                </div>
                                {/*Precio */}
                                <div>
                                    <span>$66.000</span>
                                </div>
                            </div>
                            {/* Note */}
                            <div className='grid grid-cols-6 items-center'>
                                <form className='col-span-5'>
                                    <input
                                        className='bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none'
                                        type="text"
                                        placeholder='Agrega un comentario'
                                    />
                                </form>
                                <div>
                                    <button className='p-2 rounded-lg border-red-500 border'>
                                        <RiDeleteBin6Line className='text-red-500' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Product */}
                        <div className='bg-[#262837] p-4 rounded-xl mb-4'>
                            <div className='grid grid-cols-6 mb-4'>
                                {/* Product description */}
                                <div className='col-span-4 flex items-center gap-3'>
                                    <img src="dosx1-removebg.png" className='w-10 h-10 object-cover' />
                                    <div>
                                        <h5 className='text-sm'> Kit de pintura verde todo en uno...</h5>
                                        <p className='text-xs text-gray-500'>$33.000</p>
                                    </div>
                                </div>
                                {/*Cant */}
                                <div>
                                    <button>
                                        <span>
                                            2
                                        </span>
                                    </button>
                                </div>
                                {/*Precio */}
                                <div>
                                    <span>$66.000</span>
                                </div>
                            </div>
                            {/* Note */}
                            <div className='grid grid-cols-6 items-center'>
                                <form className='col-span-5'>
                                    <input
                                        className='bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none'
                                        type="text"
                                        placeholder='Agrega un comentario'
                                    />
                                </form>
                                <div>
                                    <button className='p-2 rounded-lg border-red-500 border'>
                                        <RiDeleteBin6Line className='text-red-500' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Product */}
                        <div className='bg-[#262837] p-4 rounded-xl mb-4'>
                            <div className='grid grid-cols-6 mb-4'>
                                {/* Product description */}
                                <div className='col-span-4 flex items-center gap-3'>
                                    <img src="dosx1-removebg.png" className='w-10 h-10 object-cover' />
                                    <div>
                                        <h5 className='text-sm'> Kit de pintura verde todo en uno...</h5>
                                        <p className='text-xs text-gray-500'>$33.000</p>
                                    </div>
                                </div>
                                {/*Cant */}
                                <div>
                                    <button>
                                        <span>
                                            2
                                        </span>
                                    </button>
                                </div>
                                {/*Precio */}
                                <div>
                                    <span>$66.000</span>
                                </div>
                            </div>
                            {/* Note */}
                            <div className='grid grid-cols-6 items-center'>
                                <form className='col-span-5'>
                                    <input
                                        className='bg-[#1F1D2B] py-1 px-4 rounded-lg outline-none'
                                        type="text"
                                        placeholder='Agrega un comentario'
                                    />
                                </form>
                                <div>
                                    <button className='p-2 rounded-lg border-red-500 border'>
                                        <RiDeleteBin6Line className='text-red-500' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Submit payment */}
                <div className='bg-[#262837] absolute w-full bottom-0 left-0 p-4'>
                    <div className='flex items-center justify-between mb-4'>
                        <span className='text-gray-400'> Descuento</span>
                        <span> $ 10.000</span>
                    </div>
                    <div className='flex items-center justify-between mb-6'>
                        <span className='text-gray-400'> Subtotal</span>
                        <span> $ 254.000</span>
                    </div>
                    <div>
                        <button className='bg-[#ec7c6a] w-full py-2 px-4 rounded-lg '>
                            Continuar con el pago...
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card