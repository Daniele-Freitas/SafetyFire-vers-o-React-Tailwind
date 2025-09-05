import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import PopUp from "../Componentes/PopUp/PopUp.jsx";
import Form from "../Componentes/Form/Form.tsx"

export const CartContext = createContext();

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    // Efeito para salvar no localStorage toda vez que o carrinho mudar
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const [isCartOpen, setIsCartOpen] = useState(false);

    function openCart() {
        setIsCartOpen(true);
    }

    function closeCart() {
        setIsCartOpen(false);
    }

    function addToCart(product) {
    setCartItems(prevState => {
        const productInCart = prevState.find(item => item.id === product.id);

        if (productInCart) {
        return prevState;
        } else {
        return [...prevState, { ...product, quantity: 1 }];
        }
    });
    }

    function increaseQuantity(productId) {
    setCartItems(prevState => {
        return prevState.map(item =>
        item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
    });
    }

    function decreaseQuantity(productId) {
    setCartItems(prevState => {
        const itemToDecrease = prevState.find(item => item.id === productId);

        // Se o item não for encontrado, não faz nada
        if (!itemToDecrease) return prevState;

        // Se a quantidade do item é 1, remove ele do carrinho
        if (itemToDecrease.quantity === 1) {
        return prevState.filter(item => item.id !== productId);
        }

        // Se for maior que 1, apenas diminui a quantidade
        return prevState.map(item =>
        item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
    });
    }
    function buyNow(product){
        PopUp(<Form />)
    }

    function showPrice(itens){
        return itens.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }

    function clearCart(){
        if(cartItems.length > 0){
            setCartItems([]);
        }else{
            alert("Seu carrinho está vazio!");
        }
    }

    return (
        <CartContext.Provider 
            value= {{
                cartItems,
                addToCart,
                decreaseQuantity,
                increaseQuantity,
                clearCart,
                openCart,
                closeCart,
                isCartOpen,
                showPrice,
                buyNow
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart deve ser usado dentro de um CartProvider');
    }
    return context;
}
