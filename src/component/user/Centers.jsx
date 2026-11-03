import React, { useState } from "react";
import { Link } from "react-router-dom";

const Centers = () => {
  const [filter, setFilter] = useState("All");

  const centers = [
    {
      id: 1,
      name: "GreenTech Repair Center",
      type: "Repair Center",
      location: "Jalandhar, Punjab",
      distance: "2.4 km",
      rating: "4.8",
      verified: true,
      icon: "🔧",
      services: ["Laptop Repair", "Mobile Repair", "Battery Replacement"],
    },

    {
      id: 2,
      name: "EcoCycle E-Waste Center",
      type: "Recycling Center",
      location: "Hoshiarpur, Punjab",
      distance: "8.7 km",
      rating: "4.7",
      verified: true,
      icon: "♻️",
      services: ["E-Waste Recycling", "Computer Recycling", "Device Collection"],
    },

    {
      id: 3,
      name: "TechCare Solutions",
      type: "Repair Center",
      location: "Pathankot, Punjab",
      distance: "12.3 km",
      rating: "4.6",
      verified: true,
      icon: "🛠️",
      services: ["Laptop Repair", "Screen Replacement", "Hardware Repair"],
    },

    {
      id: 4,
      name: "Green Earth Collection Point",
      type: "Collection Point",
      location: "Ludhiana, Punjab",
      distance: "18.5 km",
      rating: "4.9",
      verified: true,
      icon: "🌱",
      services: ["Battery Collection", "E-Waste Collection", "Safe Disposal"],
    },

    {
      id: 5,
      name: "RecycleRight Electronics",
      type: "Recycling Center",
      location: "Amritsar, Punjab",
      distance: "24.1 km",
      rating: "4.5",
      verified: true,
      icon: "♻️",
      services: ["Electronic Recycling", "Laptop Recycling", "Mobile Recycling"],
    },

    {
      id: 6,
      name: "FixPoint Electronics",
      type: "Repair Center",
      location: "Mohali, Punjab",
      distance: "31.2 km",
      rating: "4.8",
      verified: true,
      icon: "🔧",
      services: ["Mobile Repair", "Laptop Repair", "Component Replacement"],
    },
  ];

  const filteredCenters =
    filter === "All"
      ? centers
      : centers.filter((center) => center.type === filter);

  return (
    <div className="centers-page">

      {/* ================= HERO ================= */}

      <section className="centers-hero">

        <div className="container">

          <span className="section-tag">
            VERIFIED NETWORK
          </span>

          <h1>
            Find The Right
            <br />
            <strong>Place For Your Device.</strong>
          </h1>

          <p>
            Connect with verified repair centers, recycling
            facilities, and responsible e-waste collection points.
          </p>

        </div>

      </section>


      {/* ================= FILTER ================= */}

      <section className="centers-section">

        <div className="container">

          <div className="centers-top">

            <div>

              <span className="section-tag">
                OUR NETWORK
              </span>

              <h2>
                Verified Centers
              </h2>

              <p>
                Choose a center based on what your device needs.
              </p>

            </div>


            <div className="center-filters">

              <button
                className={filter === "All" ? "active" : ""}
                onClick={() => setFilter("All")}
              >
                All
              </button>

              <button
                className={filter === "Repair Center" ? "active" : ""}
                onClick={() => setFilter("Repair Center")}
              >
                🔧 Repair
              </button>

              <button
                className={filter === "Recycling Center" ? "active" : ""}
                onClick={() => setFilter("Recycling Center")}
              >
                ♻️ Recycling
              </button>

              <button
                className={filter === "Collection Point" ? "active" : ""}
                onClick={() => setFilter("Collection Point")}
              >
                🌱 Collection
              </button>

            </div>

          </div>


          {/* ================= CENTER GRID ================= */}

          <div className="centers-grid">

            {filteredCenters.map((center) => (

              <div
                className="center-card"
                key={center.id}
              >

                {/* Card Top */}

                <div className="center-card-top">

                  <div className="center-icon">
                    {center.icon}
                  </div>

                  {center.verified && (
                    <span className="verified-badge">
                      ✓ Verified
                    </span>
                  )}

                </div>


                {/* Center Info */}

                <span className="center-type">
                  {center.type}
                </span>

                <h3>
                  {center.name}
                </h3>

                <div className="center-location">
                  📍 {center.location}
                </div>


                {/* Rating */}

                <div className="center-rating">

                  <span>
                    ⭐ {center.rating}
                  </span>

                  <span>
                    •
                  </span>

                  <span>
                    {center.distance}
                  </span>

                </div>


                {/* Services */}

                <div className="center-services">

                  {center.services.map((service, index) => (

                    <span key={index}>
                      {service}
                    </span>

                  ))}

                </div>


                {/* Buttons */}

                <div className="center-actions">

                  <button className="view-center-btn">
                    View Details
                  </button>

                  <button className="contact-center-btn">
                    Contact →
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= BECOME A PARTNER ================= */}

      <section className="partner-section">

        <div className="container">

          <div className="partner-card">

            <div className="partner-icon">
              🤝
            </div>

            <div className="partner-content">

              <span>
                ARE YOU A REPAIR OR RECYCLING BUSINESS?
              </span>

              <h2>
                Join the ReTechX Network.
              </h2>

              <p>
                Help people make responsible choices with their
                electronic devices and grow your local business.
              </p>

            </div>

            <Link
              to="/contact"
              className="primary-btn"
            >
              Become a Partner →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}

      <section className="centers-cta">

        <div className="container">

          <div className="centers-cta-content">

            <span>
              NOT SURE WHAT TO DO?
            </span>

            <h2>
              Let ReTechX
              <br />
              <strong>Analyze Your Device.</strong>
            </h2>

            <p>
              Get a personalized recommendation before choosing
              a repair or recycling center.
            </p>

            <Link
              to="/analyze"
              className="primary-btn"
            >
              Analyze My E-Waste →
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Centers;