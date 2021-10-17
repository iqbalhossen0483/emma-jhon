import { useEffect } from "react";
import { useState } from "react"
import { getStoredCart } from "../../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (products.length) {
            const existedCart = getStoredCart();
            const newCart = [];
            for (const key in existedCart) {
                const addedProduct = products.find((product) => product.key === key);
                if (addedProduct) {
                    //set quantity
                    const quantity = addedProduct[key];
                    addedProduct.quantity = quantity;
                    newCart.push(addedProduct);
                }
            }
            setCart(newCart);
        }
    }, [products]);
    return [cart, setCart];
}
export default useCart;