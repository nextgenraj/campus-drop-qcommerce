"use client";
import { createContext, useContext, useState, useMemo } from "react";
import { CAMPUS_BLOCKS } from "@/data/products";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const [selectedBlock, setSelectedBlock] = useState(CAMPUS_BLOCKS[0]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const currentQty = prev[product.id]?.qty || 0;
      return {
        ...prev,
        [product.id]: { product, qty: currentQty + 1 },
      };
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const currentQty = prev[productId]?.qty || 0;
      if (currentQty <= 1) {
        const updated = { ...prev };
        delete updated[productId];
        return updated;
      }
      return {
        ...prev,
        [productId]: { ...prev[productId], qty: currentQty - 1 },
      };
    });
  };

  const clearCart = () => setCart({});

  const { items, totalItems, itemTotal, deliveryFee, grandTotal } = useMemo(() => {
    const itemsList = Object.values(cart);
    const count = itemsList.reduce((acc, item) => acc + item.qty, 0);
    const subtotal = itemsList.reduce((acc, item) => acc + item.product.price * item.qty, 0);
    const fee = subtotal > 0 ? (subtotal >= 150 ? 0 : 12) : 0;
    return {
      items: itemsList,
      totalItems: count,
      itemTotal: subtotal,
      deliveryFee: fee,
      grandTotal: subtotal + fee,
    };
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        items,
        totalItems,
        itemTotal,
        deliveryFee,
        grandTotal,
        selectedBlock,
        setSelectedBlock,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);