import { useState, useMemo } from 'react';
import productsData  from '../Data/ProductsData.js';

export function useProductFilter() {
const [selectedFilters, setSelectedFilters] = useState([]);

const handleFilterChange = (event) => {
const { value, checked } = event.target;

setSelectedFilters(prevFilters => {
    if (checked) {
    return [...prevFilters, value];
    } else {
    return prevFilters.filter(filter => filter !== value);
    }
});
};

  // useMemo evita recalcular a lista de produtos a cada renderização,
  // só vai re-executar se productsData ou selectedFilters mudarem.
    const filteredProducts = useMemo(() => {
        if (selectedFilters.length === 0) {
            return productsData;
        }

    return productsData.filter(product => {
        const productTypes = product.type.split(',').map(type => type.trim());
        return selectedFilters.some(filter => productTypes.includes(filter));
    });
    }, [selectedFilters]); // A dependência é selectedFilters

    return {
    selectedFilters,
    handleFilterChange,
    filteredProducts,
    };
}