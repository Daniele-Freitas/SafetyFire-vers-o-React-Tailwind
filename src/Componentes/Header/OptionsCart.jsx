import { SlOptionsVertical } from "react-icons/sl";
import { useCart } from '../../context/CartContext';
import { useState } from "react";
import { FaTrash } from "react-icons/fa";


function OptionsCart() {

    const [isOpen, setIsOpen] = useState(false);
    const { clearCart } = useCart();

    return (
        <div>
            <div className="relative">
                <div className="flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1 hover:text-secondary-color hover:bg-white hover:opacity-80 hover:rounded-xl">
                        <SlOptionsVertical />
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 top-10 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                            <button onClick={() => { clearCart(); setIsOpen(false); }} className="flex flex-row gap-1 items-center justify-center w-full text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <FaTrash size={15} /> 
                                <p>Limpar carrinho</p>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default OptionsCart;