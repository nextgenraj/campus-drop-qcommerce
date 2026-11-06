"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { CAMPUS_BLOCKS } from "@/data/products";

export default function CartDrawer() {
  const {
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
  } = useCart();

  const [roomNo, setRoomNo] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(null);

  if (!isCartOpen) return null;

  const handleCheckout = (e) => {
    e.preventDefault();
    const orderId = "CD-" + Math.floor(1000 + Math.random() * 9000);
    setOrderPlaced({ orderId, block: selectedBlock, room: roomNo, total: grandTotal });
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-slate-50 w-full max-w-md h-full flex flex-col justify-between shadow-2xl">
        <div className="bg-white p-4 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h2 className="font-extrabold text-slate-900 text-lg">Your Campus Basket</h2>
            <p className="text-xs text-emerald-600 font-semibold">
              ⚡ Delivering in 12 mins to {selectedBlock}
            </p>
          </div>
          <button
            onClick={() => {
              setOrderPlaced(null);
              setIsCartOpen(false);
            }}
            className="text-slate-400 hover:text-slate-700 font-bold text-xl px-2"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {orderPlaced ? (
            <div className="bg-white p-6 rounded-2xl border border-emerald-200 text-center space-y-3 my-8">
              <div className="text-5xl">🎉</div>
              <h3 className="text-xl font-extrabold text-slate-900">Order Dispatched!</h3>
              <p className="text-xs font-mono bg-slate-100 inline-block px-3 py-1 rounded-md text-slate-700">
                Order ID: {orderPlaced.orderId}
              </p>
              <p className="text-sm text-slate-600">
                Our student runner is packing your order at the Campus Tuck Shop and heading to{" "}
                <strong>{orderPlaced.block} ({orderPlaced.room})</strong>.
              </p>
              <button
                onClick={() => {
                  setOrderPlaced(null);
                  setIsCartOpen(false);
                }}
                className="w-full mt-4 bg-indigo-600 text-white font-bold py-3 rounded-xl text-sm"
              >
                Back to Store
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <p className="text-4xl mb-2">🛒</p>
              <p className="font-semibold text-sm">Your basket is empty</p>
              <p className="text-xs mt-1">Add Maggi, pens, or cold coffee to get started.</p>
            </div>
          ) : (
            <>
              {itemTotal < 150 && (
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3 text-xs text-indigo-800 font-medium">
                  💡 Add <strong>₹{150 - itemTotal}</strong> more for <strong>FREE Campus Delivery!</strong>
                </div>
              )}

              <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100">
                {items.map(({ product, qty }) => (
                  <div key={product.id} className="p-3.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl bg-slate-50 p-2 rounded-lg">{product.image}</span>
                      <div>
                        <p className="text-xs font-bold text-slate-900">{product.name}</p>
                        <p className="text-[11px] text-slate-500">₹{product.price} × {qty}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center bg-slate-100 rounded-lg font-bold text-xs">
                        <button onClick={() => removeFromCart(product.id)} className="px-2.5 py-1.5">−</button>
                        <span className="px-2 font-mono">{qty}</span>
                        <button onClick={() => addToCart(product)} className="px-2.5 py-1.5">+</button>
                      </div>
                      <span className="font-bold text-sm text-slate-900 w-12 text-right font-mono">
                        ₹{product.price * qty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <form id="checkout-form" onSubmit={handleCheckout} className="bg-white rounded-2xl border border-slate-200 p-4 space-y-3">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">
                  📍 Campus Drop Location
                </h4>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Hostel / Academic Block</label>
                  <select
                    value={selectedBlock}
                    onChange={(e) => setSelectedBlock(e.target.value)}
                    className="w-full text-sm border border-slate-200 rounded-xl p-2.5 bg-slate-50 font-medium"
                  >
                    {CAMPUS_BLOCKS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Room No / Lab Desk / Gate Note</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g., Room 308 or Call at Hostel Gate"
                    value={roomNo}
                    onChange={(e) => setRoomNo(e.target.value)}
                    className="w-full text-sm border border-slate-200 rounded-xl p-2.5 bg-slate-50"
                  />
                </div>
              </form>

              <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Item Total ({totalItems} items)</span>
                  <span className="font-mono">₹{itemTotal}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Student Runner Fee</span>
                  <span className="font-mono">
                    {deliveryFee === 0 ? <span className="text-emerald-600 font-bold">FREE</span> : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between font-extrabold text-sm text-slate-900">
                  <span>To Pay</span>
                  <span className="font-mono">₹{grandTotal}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {items.length > 0 && !orderPlaced && (
          <div className="bg-white p-4 border-t border-slate-200">
            <button
              type="submit"
              form="checkout-form"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-3.5 rounded-xl text-sm shadow-lg shadow-indigo-200 transition-all"
            >
              ⚡ Pay ₹{grandTotal} via Instant UPI
            </button>
          </div>
        )}
      </div>
    </div>
  );
}