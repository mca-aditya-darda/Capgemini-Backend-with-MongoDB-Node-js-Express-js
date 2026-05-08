import React, { useState } from "react";
import "./style.css";

const products = [
  {
    id: 1,
    name: "Stylish Shoes",
    price: 120,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  },
  {
    id: 2,
    name: "Modern Watch",
    price: 90,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  },
  {
    id: 3,
    name: "Fashion Bag",
    price: 150,
    category: "Bags",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
  },
  {
    id: 4,
    name: "Sunglasses",
    price: 60,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
  },
  {
    id: 5,
    name: "Denim Jacket",
    price: 110,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&q=80",
  },
  {
    id: 6,
    name: "Sneakers",
    price: 95,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80",
  },
];

const categories = ["All", "Footwear", "Accessories", "Bags", "Clothing"];

const Shop = () => {
  const [active, setActive] = useState("All");
  const [added, setAdded] = useState({});

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  const handleAdd = (id) => {
    setAdded((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [id]: false })), 1500);
  };

  return (
    <div className="page-wrapper">
      {/* ── Hero banner ── */}
      <div className="page-hero shop-hero">
        <span className="home-deco d1" />
        <span className="home-deco d2" />
        <span className="home-pill p1" />
        <span className="sparkle s1">✦</span>

        <div className="page-hero-text centered">
          <h3>DISCOVER MORE</h3>
          <h1>
            Our <span className="yellow">Shop</span>
          </h1>
          <p>Premium fashion products curated just for you.</p>
        </div>
      </div>

      {/* ── Filter tabs ── */}
      <div className="filter-bar">
        {categories.map((c) => (
          <button
            key={c}
            className={`filter-btn ${active === c ? "filter-active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* ── Product grid ── */}
      <div className="product-grid">
        {filtered.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-img-wrap">
              <img src={item.image} alt={item.name} />
              <span className="product-badge">{item.category}</span>
            </div>
            <div className="product-info">
              <h2>{item.name}</h2>
              <p className="product-price">${item.price}</p>
              <button
                className={`buy-btn ${added[item.id] ? "added" : ""}`}
                onClick={() => handleAdd(item.id)}
              >
                {added[item.id] ? "✓ Added!" : "Buy Now"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
