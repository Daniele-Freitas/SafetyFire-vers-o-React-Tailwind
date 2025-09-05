import OpcoesNav from '../OpcoesNav/OpcoesNav.jsx'

function Navbar(){
    return (
        <nav className=" w-full bg-secondary-color h-4 lg:h-9 flex justify-between items-center ">
                <OpcoesNav 
                ulClasses="hidden w-full lg:mx-auto lg:flex lg:flex-row justify-center gap-4 items-center text-white"
                linkClasses="px-8 hover:text-black hover:scale-105 hover:font-semibold transition-colors duration-200"/>
        </nav>
    )
}
export default Navbar;
