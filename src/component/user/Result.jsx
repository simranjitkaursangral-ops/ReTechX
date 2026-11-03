import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  // If user opens /result directly without submitting the form
  if (!data) {
    return (
      <div className="result-page">
        <section className="result-empty">
          <div className="container">
            <div className="empty-card">
              <div className="empty-icon">♻️</div>

              <h1>No Analysis Found</h1>

              <p>
                Please enter your device details first so we can
                determine the best next step for your e-waste.
              </p>

              <button
                className="primary-btn"
                onClick={() => navigate("/analyze")}
              >
                Analyze My Device →
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Simple frontend decision logic
  let decision = "RECYCLE";
  let icon = "♻️";
  let title = "RECYCLE";
  let description =
    "Your device may no longer be practical to reuse or repair. Responsible recycling is recommended.";

  if (data.battery === "Swollen") {
    decision = "SAFE DISPOSAL";
    icon = "🗑️";
    title = "SAFE DISPOSAL";

    description =
      "A swollen battery requires special handling. Do not put it in normal household garbage.";
  } else if (data.working === "Yes") {
    decision = "REUSE";
    icon = "🔁";
    title = "REUSE";

    description =
      "Your device is still working. Instead of throwing it away, consider giving it another useful purpose.";
  } else if (
    data.working === "No" &&
    (data.condition === "Good" || data.condition === "Average") &&
    data.battery !== "Swollen"
  ) {
    decision = "REPAIR";
    icon = "🔧";
    title = "REPAIR";

    description =
      "Your device is not currently working, but its condition suggests that repair may be worthwhile.";
  }

  return (
    <div className="result-page">

      {/* HERO */}
      <section className="result-hero">
        <div className="container">

          <span className="section-tag">
            ANALYSIS COMPLETE
          </span>

          <h1>
            Your Device Has
            <br />
            <strong>A Next Step.</strong>
          </h1>

          <p>
            Based on the information you provided, here's our
            recommended action for your device.
          </p>

        </div>
      </section>


      {/* RESULT */}
      <section className="result-section">
        <div className="container">

          <div className="result-card-main">

            <div className="result-icon-large">
              {icon}
            </div>

            <span className="result-label">
              RECOMMENDED ACTION
            </span>

            <h2>{title}</h2>

            <p className="result-description">
              {description}
            </p>


            {/* Device Information */}
            <div className="result-details">

              <h3>Your Device Details</h3>

              <div className="details-grid">

                <div className="detail-item">
                  <span>Device</span>
                  <strong>{data.deviceType}</strong>
                </div>

                <div className="detail-item">
                  <span>Age</span>
                  <strong>{data.age}</strong>
                </div>

                <div className="detail-item">
                  <span>Working</span>
                  <strong>{data.working}</strong>
                </div>

                <div className="detail-item">
                  <span>Condition</span>
                  <strong>{data.condition}</strong>
                </div>

                <div className="detail-item">
                  <span>Battery</span>
                  <strong>{data.battery}</strong>
                </div>

                <div className="detail-item">
                  <span>Screen</span>
                  <strong>{data.screen}</strong>
                </div>

              </div>

            </div>


            {/* Actions */}
            <div className="result-actions">

              {decision === "REPAIR" && (
                <button
                  className="primary-btn"
                  onClick={() => navigate("/centers")}
                >
                  Find Repair Centers →
                </button>
              )}

              {decision === "RECYCLE" && (
                <button
                  className="primary-btn"
                  onClick={() => navigate("/centers")}
                >
                  Find Recycling Centers →
                </button>
              )}

              {decision === "REUSE" && (
                <button
                  className="primary-btn"
                  onClick={() => navigate("/reuse")}
                >
                  Explore Reuse Ideas →
                </button>
              )}

              {decision === "SAFE DISPOSAL" && (
                <button
                  className="primary-btn"
                  onClick={() => navigate("/centers")}
                >
                  Find Collection Centers →
                </button>
              )}

              <button
                className="secondary-btn"
                onClick={() => navigate("/analyze")}
              >
                Analyze Another Device
              </button>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Result;