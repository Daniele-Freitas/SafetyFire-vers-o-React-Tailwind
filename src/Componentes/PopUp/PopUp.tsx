import { usePopup } from '../../context/PopUpContext.tsx';
import { FaTimes } from 'react-icons/fa';

export default function Popup() {
    const { isOpen, popupContent, closePopup } = usePopup();

    if (!isOpen) {
        return null; // Se não estiver aberto, não renderiza nada
    }

    return (
        <>
            <div 
                className={`fixed inset-0 bg-black z-60 transition-opacity duration-300 
                ${isOpen ? 'opacity-50' : 'opacity-0 invisible'}`}
                onClick={closePopup} // Fecha o menu ao clicar no overlay
            ></div>

        <div className="fixed inset-0 z-90 flex items-center bg-opacity-50 justify-center p-4">
            <div
                className="bg-white z-100  rounded-lg shadow-xl w-full max-w-xl relative"
                onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal feche-o
            >
            <button
                onClick={closePopup}
                className="absolute cursor-pointer top-2 right-2 p-2 text-gray-500 hover:text-gray-800 z-10"
            >
                <FaTimes />
            </button>
            <div>
                {popupContent}
            </div>
            </div>
        </div>
        </>
    );
}