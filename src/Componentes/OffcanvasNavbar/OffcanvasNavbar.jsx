import { FaTimes } from 'react-icons/fa';
import OpcoesNav from '../OpcoesNav/OpcoesNav';
import UserIcon from '../Header/userIcon';
import UserOptions from '../Header/userOptions';

function OffcanvasNavbar({ isOpen, toggleMenu }) { 
    return (
        <>
            {/* Overlay (fundo escuro) */}
            <div 
                className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 
                ${isOpen ? 'opacity-50' : 'opacity-0 invisible'}`}
                onClick={toggleMenu} // Fecha o menu ao clicar no overlay
            ></div>

            <div 
                className={`offcanvasContainer fixed top-0 right-0 w-2/4 md:w-1/3 h-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out 
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className='OffcanvasHeader bg-secondary-color text-white p-5 flex justify-between items-center border-b border-gray-200'>
                    <h3 className='font-semibold m-0 text-2xl'>Menu</h3>
                    {/* Botão de Fechar: posicionado dentro do cabeçalho do offcanvas */}
                    <button 
                        className='p-2 rounded-md text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-primary-color' // Classes aplicadas ao botão
                        onClick={toggleMenu}
                        aria-label="Fechar menu"
                    >
                        <FaTimes className='text-2xl cursor-pointer' /> {/* Apenas o tamanho e cursor no ícone */}
                    </button>
                </div>
                <div className='OffcanvasBody overflow-y-auto h-full'>
                    <div>
                        <h4 className='font-semibold bg-gray-50 border-y-2 border-gray-200 p-3 m-0 text-center text-lg'>Área do Usuário</h4>
                        <UserOptions />
                    </div>
                    <h4 className='font-semibold border-y-2 border-gray-200 bg-gray-50 p-3 text-center m-0 text-lg'>Navegação</h4>
                    <nav className='border-b-1 border-gray-300 py-0'>
                        <OpcoesNav
                            ulClasses="flex divide-y divide-gray-300 text-sm text-gray-700 bg-white text-center flex-col space-y-2" // Classes para UL no offcanvas
                            linkClasses="block py-3 px-4 rounded-sm text-gray-800" // Classes para LI no offcanvas
                            onLinkClick={toggleMenu} // Fecha o offcanvas ao clicar em um link
                        />
                    </nav>
                </div>
            </div>
        </>
    );
}

export default OffcanvasNavbar;