import { useCart } from '../../context/CartContext';
import { FaAngleLeft } from 'react-icons/fa';
import {FaMinus, FaPlus } from "react-icons/fa6";
import OptionsCart from './OptionsCart';
import { Link } from 'react-router-dom';
import { usePopup } from '../../context/PopUpContext';
import ProductForm from '../Form/ProductForm';

export default function OffcanvasCart() { 

    const { isCartOpen,decreaseQuantity,increaseQuantity, closeCart, cartItems } = useCart();
    const { openPopup } = usePopup();
    const handleBuyNow = () => {
            openPopup(
                <ProductForm 
                    title="Compra Indisponível"
                    formOrigin={`Tentativa de prosseguir com a compra`} 
                />
            );
        };

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>   
            {/* Overlay */}
            <div 
                className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 
                ${isCartOpen ? 'opacity-50' : 'opacity-0 invisible'}`}
                onClick={closeCart}
            ></div>

            {/* O Painel Off-canvas */}
            <div 
                className={`offcanvasContainer fixed top-0 right-0 w-[70%] max-w-100 h-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out 
                ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`} // Controlado pelo estado do contexto
            >
                <div className='py-2 px-4 flex justify-between items-center border-b bg-secondary-color border-gray-200'>
                    <button 
                        className='py-2 pl-1 rounded-md text-white'
                        onClick={closeCart}
                        aria-label="Fechar carrinho"
                    >
                        <FaAngleLeft className='text-2xl cursor-pointer' />
                    </button>
                    <h3 className='font-bold text-white m-auto text-lg'>Meu carrinho ({totalItems})</h3>
                    <OptionsCart className="cursor-pointer m-auto text-2xl" />
                </div>

                <div className=" mt-2 overflow-y-auto h-[70%] px-3">
                    {cartItems.length > 0 ? (
                        cartItems.map(item => (
                            <div key={item.id} className="w-full border-b border-gray-200 pb-2 h-25 flex flex-row items-center justify-between mb-2 gap-4 ">
                                <div className='flex max-w-full h-full'>
                                    <img src={item.imagePath} alt={item.name} className=" object-cover inline-block mr-2" />
                                </div>
                                <div className=''>
                                    <h4 className="text-sm font-semibold">{item.name}</h4>
                                    <p className='text-sm text-nowrap'>{`Subtotal: R$ ${item.price * item.quantity}`}</p>
                                </div>
                                <div className="flex flex-row text-black text-md items-center gap-2">
                                    <button className='cursor-pointer' onClick={() => decreaseQuantity(item.id)}>
                                        <FaMinus size={15} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button className='cursor-pointer' onClick={() => increaseQuantity(item.id)}>
                                        <FaPlus size={15} />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='h-full flex-col text-center items-center justify-center flex w-full py-8 m-auto'>
                            <p>Seu carrinho está vazio.</p>
                            <p>Que tal dar uma olhada no nosso catálogo de 
                                <Link 
                                    className="text-secondary-color ml-1 cursor-pointer hover:underline" 
                                    to="/produtos"
                                    onClick={closeCart}
                                    >produtos
                                </Link>?
                            </p>
                        </div>
                    )}
                </div>
                {
                    cartItems.length > 0 && (
                        <div className='px-4 py-3 gap-2 h-auto m-auto bg-gray-50 border-gray-200 justify-center items-center flex flex-col w-full text-right border-t '>
                            <div className='h-auto w-full text-center'>
                                <h4 className='font-bold text-lg m-0'>Total: R$ {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h4>
                            </div>
                            <button onClick={handleBuyNow} className='w-auto cursor-pointer px-9 py-2 text-sm bg-black text-white rounded-2xl'>
                                Finalizar Compra
                            </button>
                        </div>
                    )
                }
            </div>
        </>
    );
}
