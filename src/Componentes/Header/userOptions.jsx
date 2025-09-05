import { FaShoppingBag } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Link } from 'react-router';
import { useAuth } from "../../context/AuthContext.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { FaShoppingCart } from "react-icons/fa";


export default function UserOptions(){
    
    const { openCart, cartItems } = useCart();
    const { currentUser , logout } = useAuth();

    const getFirstName = (name) => {
        if (!name) return null; // Retorna nulo se não houver nome
        return name.split(' ')[0]; // Pega a primeira palavra
    };

    const firstName = getFirstName(currentUser?.displayName); // Usamos optional chaining (?.) para segurança


    const handleLogout = async () => {
        try{
            await logout();
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        }
    };

    return(
        <div className="w-full h-auto flex flex-col text-sm p-2">
            {currentUser ? (
                <ul className="text-gray-700 text-center divide-y divide-gray-200">
                    <li className="px-4 cursor-context-menu text-sm py-3 lg:pt-2 font-semibold">
                        <span className="text-md">Olá, {firstName || 'Usuário'}</span>
                    </li>

                    <li className="hover:bg-gray-100">
                        <Link to="/meus-pedidos" className="flex justify-center text-sm items-center w-full px-4 py-3 lg:py-2">
                            <FaShoppingBag  size={18} className="mr-1 mb-0.5" />
                            Meus pedidos
                        </Link>
                    </li>
                    <button onClick={openCart} className="hover:bg-gray-100 cursor-pointer flex justify-center items-center w-full px-4 py-3 lg:py-2 ">
                            <FaShoppingCart size={18} className="mr-1 mb-0.5" />
                            Meu carrinho
                    </button>

                    <li className="hover:bg-gray-100 border-b-1 border-gray-200">
                        <button onClick={handleLogout} className="flex justify-center cursor-pointer text-sm items-center w-full px-4 py-3 lg:py-2">
                            <ImExit className="mr-1" />
                            Sair
                        </button>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li className="hover:bg-gray-100">
                        <Link to="/login" className="flex items-center justify-center w-full px-4 py-3 lg:py-2">
                            <FaArrowRightToBracket className="mr-2" />
                            Entrar
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    )
}