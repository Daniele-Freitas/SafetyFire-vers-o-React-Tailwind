import { Link } from "react-router"

export default function MeusPedidos(){
    return(
        <div className="min-h-screen flex justify-center align-middle m-auto">
            <div className="m-auto text-center">
                <p >Você ainda não fez nenhum pedido...</p>
                <span>
                    Que tal dar uma olhada na nossa página de 
                    <Link className="underline text-secondary-color ml-1" to="/produtos">
                        produtos
                    </Link>
                    ?
                </span>
            </div>
        </div>
    )
}