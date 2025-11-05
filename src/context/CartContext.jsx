import { useContext, useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

export const CartProvider =({children})=>{

    const [cart,setCart]=useState([]);

    //Add to cart 
    const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


    return(
        <CartContext.Provider 
        value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        totalItems,
        totalPrice
      }}
        >


            {children}
        </CartContext.Provider>
    )
    
}
export const useCart = () => useContext(CartContext);
