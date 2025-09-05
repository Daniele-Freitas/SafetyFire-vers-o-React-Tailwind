import { FaCartPlus } from "react-icons/fa6";
import { BsCartCheckFill } from "react-icons/bs";
import { useCart } from '../../context/CartContext';
import { usePopup } from "../../context/PopUpContext";
import ProductForm from "../Form/ProductForm.tsx";


export function ProductCard({ product }) {

    const { addToCart, cartItems } = useCart();
    const { openPopup } = usePopup();

    const handleBuyNow = () => {
        openPopup(
            <ProductForm 
                title="Compra Indisponível"
                formOrigin={`Produto: ${product.name}`} 
            />
        );
    };


    const IsInCart = cartItems.some(item => item.id === product.id) ? BsCartCheckFill : FaCartPlus;

return (
    <div 
        className="product-card relative flex flex-col py-4 justify-center lg:justify-between px-4 text-center h-[350px] lg:h-[300px] lg:pb-4 border-2 border-gray-200 rounded-lg shadow-md overflow-hidden lg:hover:h-auto transition-all duration-300 ease-in-out hover:shadow-xl"
    >   
        <IsInCart onClick={() => addToCart(product)} className="absolute top-3 cursor-pointer right-3 text-xl text-gray-600" />
        <a href={`/produtos/${product.id}`}>
            <img src={product.imagePath} alt={product.name} className="w-auto h-auto m-auto max-h-[200px]  max-w-full object-cover" />
        </a>

        <div className="flex flex-col">
            
            <div className="my-3">
                <h3 className="text-black text-[16px] my-1">{product.name}</h3>
                <p className="text-secondary-color font-semibold">R$ {product.price.toFixed(2).replace('.', ',')}</p>
            </div>
            <div className="product-buttons text-sm hidden lg:flex lg:flex-col gap-2">
                <button onClick={handleBuyNow} className="buy-button w-full bg-black text-white py-1.5 mt-1 rounded-md hover:bg-secondary-color transition cursor-pointer">Comprar</button>
                <button onClick={() => addToCart(product)} className="add-cart w-full bg-gray-200 text-gray-800 py-1.5 rounded-md hover:bg-gray-300 transition cursor-pointer">Adicionar ao Carrinho</button>
            </div>
        </div>
    </div>
);
}