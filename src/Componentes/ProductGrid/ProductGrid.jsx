import { ProductCard } from '../ProductGrid/ProductCard.jsx';

export function ProductGrid({ products, className =""  }) {
    return (
        <div className={className}>
            {products.length > 0 ? (
            products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))
            ) : (
            <p className="text-center col-span-full text-lg text-gray-500">Nenhum produto encontrado.</p>
            )}
        </div>
    );
}