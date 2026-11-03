import React from "react";
import { useNavigate } from "react-router-dom";

const Reuse = () => {
  const navigate = useNavigate();

  const reuseIdeas = [
    {
      id: 1,
      icon: "📱",
      device: "Old Smartphone",
      title: "Turn It Into a Security Camera",
      description:
        "Use your old smartphone as a home security camera or baby monitor.",
      steps: [
        "Install a camera monitoring app",
        "Connect it to Wi-Fi",
        "Place it in the required location",
      ],
    },
    {
      id: 2,
      icon: "💻",
      device: "Old Laptop",
      title: "Create a Learning Device",
      description:
        "An old laptop can still be useful for learning, coding, browsing, and basic work.",
      steps: [
        "Remove unnecessary applications",
        "Install a lightweight operating system",
        "Use it for learning and development",
      ],
    },
    {
      id: 3,
      icon: "📲",
      device: "Old Tablet",
      title: "Make a Digital Learning Hub",
      description:
        "Give an unused tablet a new purpose as a reading or educational device.",
      steps: [
        "Install educational applications",
        "Add digital books",
        "Use it as a dedicated learning device",
      ],
    },
    {
      id: 4,
      icon: "🎵",
      device: "Old Phone",
      title: "Use It as a Music Player",
      description:
        "Keep your old phone as a dedicated offline music and entertainment device.",
      steps: [
        "Transfer your music",
        "Connect headphones or speakers",
        "Use it without a SIM card",
      ],
    },
    {
      id: 5,
      icon: "🖥️",
      device: "Old Monitor",
      title: "Create a Second Display",
      description:
        "A working monitor can extend your workspace and improve productivity.",
      steps: [
        "Check available ports",
        "Connect it to another computer",
        "Use it as a second screen",
      ],
    },
    {
      id: 6,
      icon: "⌨️",
      device: "Old Keyboard",
      title: "Give It a Second Workspace",
      description:
        "A functional keyboard can continue serving as a backup or secondary input device.",
      steps: [
        "Check all keys",
        "Clean the keyboard",
        "Use it with another computer",
      ],
    },
  ];

  return (
    <div className="reuse-page">

      {/* ================= HERO ================= */}

      <section className="reuse-hero">
        <div className="container">

          <span className="section-tag">
            SMART REUSE
          </span>

          <h1>
            Don't Throw It Away.
            <br />
            <strong>Give It Another Purpose.</strong>
          </h1>

          <p>
            Many old electronic devices can still be useful.
            Discover practical ways to give your technology
            a second life.
          </p>

        </div>
      </section>


      {/* ================= INTRO ================= */}

      <section className="reuse-intro">
        <div className="container">

          <div className="reuse-intro-content">

            <div>
              <span className="section-tag">
                SECOND LIFE IDEAS
              </span>

              <h2>
                Your Old Device
                <br />
                <strong>Can Still Be Useful.</strong>
              </h2>
            </div>

            <p>
              Before recycling or disposing of an electronic device,
              check whether it can be reused for another purpose.
              Reuse helps extend the useful life of technology and
              reduces unnecessary electronic waste.
            </p>

          </div>

        </div>
      </section>


      {/* ================= IDEAS ================= */}

      <section className="reuse-section">
        <div className="container">

          <div className="section-heading">

            <span>
              REUSE POSSIBILITIES
            </span>

            <h2>
              Turn Old Technology
              <br />
              <strong>Into Something Useful.</strong>
            </h2>

            <p>
              Explore some practical ideas for common electronic
              devices.
            </p>

          </div>


          <div className="reuse-grid">

            {reuseIdeas.map((item) => (

              <div className="reuse-card" key={item.id}>

                {/* Card Header */}

                <div className="reuse-card-header">

                  <div className="reuse-icon">
                    {item.icon}
                  </div>

                  <span className="reuse-device">
                    {item.device}
                  </span>

                </div>


                {/* Content */}

                <h3>
                  {item.title}
                </h3>

                <p className="reuse-description">
                  {item.description}
                </p>


                {/* Steps */}

                <div className="reuse-steps">

                  <span>
                    HOW TO DO IT
                  </span>

                  {item.steps.map((step, index) => (

                    <div
                      className="reuse-step"
                      key={index}
                    >

                      <strong>
                        0{index + 1}
                      </strong>

                      <p>
                        {step}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ================= BENEFITS ================= */}

      <section className="reuse-benefits">

        <div className="container">

          <div className="benefits-content">

            <div className="benefits-text">

              <span className="section-tag">
                WHY REUSE?
              </span>

              <h2>
                One More Use
                <br />
                <strong>Makes a Difference.</strong>
              </h2>

              <p>
                Reusing electronics keeps products in use for longer,
                reduces unnecessary waste, and can save money.
              </p>

            </div>


            <div className="benefits-grid">

              <div className="benefit-card">
                <div>🌱</div>
                <h3>Less Waste</h3>
                <p>
                  Keep useful devices away from landfills.
                </p>
              </div>

              <div className="benefit-card">
                <div>💰</div>
                <h3>Save Money</h3>
                <p>
                  Give old technology a new purpose instead of
                  buying another device.
                </p>
              </div>

              <div className="benefit-card">
                <div>♻️</div>
                <h3>Extend Lifespan</h3>
                <p>
                  Make your electronics useful for longer.
                </p>
              </div>

              <div className="benefit-card">
                <div>🌍</div>
                <h3>Protect Resources</h3>
                <p>
                  Reduce demand for new electronic products.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="reuse-cta">

        <div className="container">

          <div className="reuse-cta-content">

            <span>
              NOT SURE WHAT TO DO?
            </span>

            <h2>
              Let ReTechX
              <br />
              <strong>Analyze Your Device.</strong>
            </h2>

            <p>
              Enter your device details and discover whether it
              should be reused, repaired, recycled, or safely
              disposed of.
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
};

export default Reuse;