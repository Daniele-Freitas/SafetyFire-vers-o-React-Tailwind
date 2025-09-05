import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

function Cart(){
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <div className="cart">
            <div>
                <button>
                    <FaAngleLeft />
                </button>
                <h2>Seu carrinho</h2>
            </div>
            <div>
                <h3>Itens no carrinho:</h3>
            </div>
            <div>

            </div>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>{item.name} - R$ {item.price.toFixed(2).replace(".", ",")}</li>
                ))}
            </ul>
            <h3>Total: R$ {totalPrice.toFixed(2).replace(".", ",")}</h3>
        </div>
    );
}

export default Cart;