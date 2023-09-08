import React from "react";
import './CartButton.css'

import { AiOutlineShoppingCart } from "react-icons/ai"


function CartButton() {
    return (
        <button type="button" className="cart__button">
            <AiOutlineShoppingCart />
            <span className="cart-status"></span>
        </button>
    )
}

export default CartButton;