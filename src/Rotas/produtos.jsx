import {FilterPanel} from "../Componentes/FilterPanel/FilterPanel.jsx"  ;   
import useWindowWidth from "../Componentes/Hooks/WindowWidth";
import { useProductFilter } from "../Componentes/Hooks/useProductFilter";
import filterOptions from '../Componentes/Data/ProductsData.js'
import { ProductGrid } from "../Componentes/ProductGrid/ProductGrid.jsx";


export default function Produtos() {
    const windowWidth = useWindowWidth();
    const CaminhoImagem = windowWidth < 1024 ? "/assets/banner-produtos-responsivo.png":"/assets/banner-extintor-pc.webp";
    const { selectedFilters, handleFilterChange, filteredProducts } = useProductFilter();

    return (
        <div className="flex justify-center items-center m-auto flex-col pt-26 lg:pt-32">
            <div className="w-full flex flex-row justify-center items-center h-[175px] sm:h-[250px] md:h-[300px] relative">

                <img 
                    className="absolute inset-0 w-full h-full object-cover z-0" 
                    src={CaminhoImagem}
                    alt="Banner de Produtos" 
                />

                <div className="z-10 w-full h-full flex flex-row justify-end">
                    {/* Conteúdo de texto à esquerda */}
                    <div className="text-white flex justify-center flex-col my-auto px-4 sm:w-[70%] md:w-[60%] lg:w-[50%]">
                        <h2 className="text-xl mt-0 mb-1 text-left md:text-4xl font-bold">Extintores</h2>
                        <ul className="list-disc pl-8">
                            <li className="text-xs sm:text-lg md:text-2xl lg:text-2xl">Quanto mais você compra menor o preço!</li>
                            <li className="text-xs sm:text-lg md:text-2xl lg:text-2xl">Diversas classes e agentes extintores</li>
                            <li className="text-xs sm:text-lg md:text-2xl lg:text-2xl">Sobre rodas</li>
                            <li className="text-xs sm:text-lg md:text-2xl lg:text-2xl">Portáteis</li>
                        </ul>
                    </div>
                    <img className="h-auto w-auto hidden sm:my-12 md:block max-w-1/6 max-h-2/3 mr-12" src="/assets/Logo-vertical-branca.png" alt="Logo da Empresa" />
                </div>
            </div>
            <div className="flex flex-col w-full 2xl:max-w-[1500px] justify-center items-center lg:flex-row relative gap-4 py-4 px-4 mx-auto">
                <FilterPanel
                    options={filterOptions}
                    selectedFilters={selectedFilters}
                    onFilterChange={handleFilterChange}
                />
                <ProductGrid className={`w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4`} products={filteredProducts} />
            </div>  
        </div>
    );
}