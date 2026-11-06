"use client";
import { useState } from "react";
import { CartProvider, useCart } from "@/context/CartContext";
import { PRODUCTS, CATEGORIES, CAMPUS_BLOCKS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";

function Storefront() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems, grandTotal, selectedBlock, setSelectedBlock, setIsCartOpen } = useCart();

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-28">
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-2xs">
        <div className="max-w-4xl mx-auto px-4 py-3 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-indigo-600 text-white font-extrabold p-2 rounded-xl text-lg leading-none">
                ⚡
              </span>
              <div>
                <h1 className="font-extrabold text-slate-900 text-lg leading-none">CampusDrop</h1>
                <p className="text-[11px] text-emerald-600 font-bold mt-0.5">
                  12-Min Hostel & Lab Delivery
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
              <span className="text-xs">📍</span>
              <select
                value={selectedBlock}
                onChange={(e) => setSelectedBlock(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-800 focus:outline-none"
              >
                {CAMPUS_BLOCKS.map((block) => (
                  <option key={block} value={block}>{block}</option>
                ))}
              </select>
            </div>
          </div>

          <input
            type="text"
            placeholder='Search "Maggi", "Record Book", "Blue Pen", "Red Bull"...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {totalItems > 0 && (
        <div className="fixed bottom-4 inset-x-0 px-4 z-40 max-w-lg mx-auto">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-2xl shadow-xl flex items-center justify-between transition-transform active:scale-98"
          >
            <div className="flex items-center gap-3">
              <span className="bg-indigo-800 px-3 py-1 rounded-lg font-mono font-bold text-sm">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
              <span className="font-extrabold text-base font-mono">₹{grandTotal}</span>
            </div>
            <span className="font-bold text-sm flex items-center gap-1">
              View Basket & Checkout →
            </span>
          </button>
        </div>
      )}

      <CartDrawer />
    </div>
  );
}

export default function Page() {
  return (
    <CartProvider>
      <Storefront />
    </CartProvider>
  );
}