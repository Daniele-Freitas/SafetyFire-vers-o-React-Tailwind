import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function PaginaNaoEncontrada() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full">
                
                {/* Ícone */}
                <FaExclamationTriangle className="mx-auto h-12 w-12 text-red-500" />

                {/* Texto "404" com gradiente */}
                <h1 className="mt-4 text-8xl sm:text-9xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                        404
                    </span>
                </h1>
                
                {/* Mensagem Principal */}
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
                Página Não Encontrada
                </h2>
                
                {/* Mensagem de Ajuda */}
                <p className="mt-4 text-base text-gray-600">
                Oops! Parece que o caminho que você tentou acessar não existe ou foi movido.
                </p>
                
                {/* Ações e Links */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                    to="/"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary-color hover:bg-primary-color transition-colors"
                >
                    Voltar para a Página Inicial
                </Link>
                <Link
                    to="/contato"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                    Fale Conosco
                </Link>
                </div>
            </div>
        </div>
    );
}