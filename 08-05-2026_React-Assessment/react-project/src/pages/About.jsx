import React from "react";
import "./style.css";

const stats = [
  { value: "12K+", label: "Happy Customers" },
  { value: "800+", label: "Products" },
  { value: "99%", label: "Satisfaction" },
];

const About = () => {
  return (
    <div className="page-wrapper">
      {/* ── Hero banner ── */}
      <div className="page-hero">
        <span className="home-deco d1" />
        <span className="home-deco d2" />
        <span className="home-pill p1" />
        <span className="home-pill p2" />
        <span className="sparkle s1">✦</span>
        <span className="sparkle s2">✦</span>

        <div className="page-hero-text">
          <h3>WHO WE ARE</h3>
          <h1>
            About <span className="yellow">Us</span>
          </h1>
          <p>
            We bring you the finest fashion products with premium quality and
            unbeatable prices — because style should be for everyone.
          </p>
        </div>

        <div className="about-img-wrap">
          <div className="about-circle">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80"
              alt="about us"
            />
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="stats-bar">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Mission section ── */}
      <div className="about-mission">
        <div className="mission-card">
          <div className="mission-icon">🛍️</div>
          <h3>Our Mission</h3>
          <p>
            To make online shopping simple, stylish, and enjoyable for everyone
            around the world.
          </p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">💎</div>
          <h3>Our Vision</h3>
          <p>
            To become the most trusted fashion destination with premium quality
            at every price point.
          </p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">🚀</div>
          <h3>Our Values</h3>
          <p>
            Innovation, inclusivity, and integrity drive everything we create
            and deliver.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
