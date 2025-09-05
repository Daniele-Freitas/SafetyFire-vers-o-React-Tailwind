import Navbar from "../Navbar/Navbar"
import Logo from "../Logo/Logo"
import { Link } from "react-router"
import OffcanvasNavbar from '../OffcanvasNavbar/OffcanvasNavbar.jsx';
import { useState } from 'react';
import { FaShoppingCart,FaBars } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import UserIcon from './userIcon.jsx';


const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const { openCart, cartItems } = useCart();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);


    function toggleMenu() {
        setIsOpen(!isOpen);
    }
    return (
        <header className="fixed w-full z-50">
            <div className="w-full h-23 bg-white flex justify-between items-center">
                <Logo>
                    <Link to='/'></Link>
                </Logo>
                <div className="flex text-2xl text-secondary-color gap-2 items-center justify-between">
                    <button onClick={openCart} className="relative mr-2">
                        <FaShoppingCart className="cursor-pointer mb-0.5 lg:mb-0" size={28} />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 bg-primary-color text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </button>
                    <UserIcon />
                    <button
                        className="z-50 cursor-pointer focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Abrir menu">
                        <FaBars size={28} className="mr-6 lg:hidden" />
                    </button>
                </div>
            </div>
            <Navbar />
            <OffcanvasNavbar isOpen={isOpen} toggleMenu={toggleMenu} />
        </header>
    )
}

export default Header