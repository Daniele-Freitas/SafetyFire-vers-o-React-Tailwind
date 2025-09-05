import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import filterOptions from './filterOptions'; // Importando as opções de filtro

export function FilterPanel({ selectedFilters, onFilterChange }) {
    const isMobile = window.innerWidth < 768;

    const [isOptionsOpen, setIsOptionsOpen] = useState(
    isMobile ? false : true
  ); // Na versão mobile começa fechado, mas na desktop começa aberto

const toggleOptions = () => {
setIsOptionsOpen(!isOptionsOpen);
};

    return (
        <div className="w-full shadow-md lg:w-1/4 lg:max-w-lg lg:sticky lg:top-34 border-2 p-5 lg:py-3 lg:overflow-y-auto border-gray-200 rounded-2xl self-start 2xl:align-middle ">
        <div>
            <p className="text-md font-semibold mb-2 mt-0 ml-1 xl:mb-2">Filtrar por:</p>
            <button 
            onClick={toggleOptions} 
            className="w-full flex justify-between items-center text-lg font-semibold mb-2 py-2 px-3 rounded-lg bg-gray-50 border border-gray-300 hover:bg-gray-100 transition-colors"
            >
            <span className='text-sm'>Categorias</span>
            <FaChevronDown className={`transform transition-transform duration-300 ${isOptionsOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
        </div>
        
        {isOptionsOpen && (
            <div className="filter-options space-y-1 mt-2">
            {filterOptions.map((option) => (
                <label key={option.value} className="flex text-md items-center space-x-2 text-gray-700">
                <input 
                    type="checkbox" 
                    value={option.value} 
                    onChange={onFilterChange} 
                    checked={selectedFilters.includes(option.value)}
                    className="h-4 w-4 accent-black border-gray-300 rounded focus:ring-black"
                />
                <span className='text-sm'>{option.label}</span>
                </label>
            ))}
            </div>
        )}
        </div>
    );
}