"use client";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { cart, addToCart, removeFromCart } = useCart();
  const quantity = cart[product.id]?.qty || 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-3.5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div className="relative bg-slate-50 rounded-xl h-28 flex items-center justify-center text-5xl mb-3">
          {product.image}
          {product.tag && (
            <span className="absolute top-2 left-2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              {product.tag}
            </span>
          )}
          <span className="absolute bottom-2 right-2 bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
            ⏱ {product.eta}
          </span>
        </div>

        <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-slate-500 mt-1">{product.unit}</p>
      </div>

      <div className="flex items-center justify-between mt-4 pt-2 border-t border-slate-100">
        <span className="font-extrabold text-slate-900 text-base">
          ₹{product.price}
        </span>

        {quantity === 0 ? (
          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 font-bold text-xs px-4 py-2 rounded-lg transition-colors"
          >
            + ADD
          </button>
        ) : (
          <div className="flex items-center bg-indigo-600 text-white rounded-lg overflow-hidden font-bold text-xs">
            <button
              onClick={() => removeFromCart(product.id)}
              className="px-2.5 py-2 hover:bg-indigo-700 transition-colors"
            >
              −
            </button>
            <span className="px-2 font-mono">{quantity}</span>
            <button
              onClick={() => addToCart(product)}
              className="px-2.5 py-2 hover:bg-indigo-700 transition-colors"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}