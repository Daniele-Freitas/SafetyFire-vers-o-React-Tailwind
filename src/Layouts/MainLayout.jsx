import Header from "../Componentes/Header/Header"
import Footer from "../Componentes/Footer/Footer"
import { Outlet } from 'react-router-dom';
import OffcanvasCart from '../Componentes/Header/Cart'

export default function MainLayout(){
    return(
        <>
            <Header />
            <OffcanvasCart />
            <main>
                <Outlet />
                {/* Aqui vão as rotas filhas */}
            </main>
            <Footer />
        </>
    )
}
