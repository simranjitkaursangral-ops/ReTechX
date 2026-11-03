import React from "react";
import { Link } from "react-router-dom";
import News from "./News";


const Home = () => {
  return (
    <div className="home-page">
    <News />

      {/* ================= HERO SECTION ================= */}

      <section className="hero-section">

        <div className="container hero-content">

          <div className="hero-text">

            <span className="hero-badge">
              ♻️ Smart E-Waste Recovery Platform
            </span>

            <h1>
              Give Your Old Tech
              <span> A New Life.</span>
            </h1>

            <p>
              Don't throw your old electronics away. ReTechX analyzes
              your e-waste and tells you whether it should be reused,
              repaired, recycled, or safely disposed of.
            </p>

            <div className="hero-buttons">

              <Link
                to="/analyze"
                className="primary-btn"
              >
                Analyze My E-Waste →
              </Link>

              <Link
                to="/how-it-works"
                className="secondary-btn"
              >
                How It Works
              </Link>

            </div>

            <div className="hero-trust">

              <span>
                ✓ Smart Decision
              </span>

              <span>
                ✓ Verified Centers
              </span>

              <span>
                ✓ Eco Friendly
              </span>

            </div>

          </div>



          {/* ================= HERO VISUAL ================= */}

          <div className="hero-visual">

            <div className="hero-card main-card">

              <div className="device-icon">
                💻
              </div>

              <h3>
                Old Laptop
              </h3>

              <p>
                Not working • 6 years old
              </p>

              <div className="analysis-line">

                <span>
                  Analyzing...
                </span>

                <span>
                  •••
                </span>

              </div>

              <div className="result-card">

                <span className="result-icon">
                  🔧
                </span>

                <div>

                  <small>
                    Recommended Action
                  </small>

                  <strong>
                    REPAIR
                  </strong>

                </div>

              </div>

            </div>



            {/* Floating Cards */}

            <div className="floating-card card-one">
              ♻️ Recycle
            </div>

            <div className="floating-card card-two">
              🔁 Reuse
            </div>

            <div className="floating-card card-three">
              🔧 Repair
            </div>

          </div>

        </div>

      </section>



      {/* ================= HOW IT WORKS ================= */}

      <section className="how-section">

        <div className="container">

          <div className="section-heading">

            <span>
              HOW IT WORKS
            </span>

            <h2>
              From Old Device
              <br />
              <strong>
                To Its Next Life.
              </strong>
            </h2>

            <p>
              ReTechX makes responsible e-waste management simple.
              Just tell us about your device and we'll guide you.
            </p>

          </div>



          <div className="steps">


            {/* STEP 01 */}

            <div className="step-card">

              <div className="step-number">
                01
              </div>

              <div className="step-icon">
                📱
              </div>

              <h3>
                Enter Your Device
              </h3>

              <p>
                Select your electronic device and provide basic
                information about its age and condition.
              </p>

            </div>



            {/* STEP 02 */}

            <div className="step-card">

              <div className="step-number">
                02
              </div>

              <div className="step-icon">
                🧠
              </div>

              <h3>
                We Analyze It
              </h3>

              <p>
                Our decision system analyzes the information and
                determines the best possible next step.
              </p>

            </div>



            {/* STEP 03 */}

            <div className="step-card">

              <div className="step-number">
                03
              </div>

              <div className="step-icon">
                🎯
              </div>

              <h3>
                Get Your Solution
              </h3>

              <p>
                Get a personalized recommendation for reuse,
                repair, recycling, or safe disposal.
              </p>

            </div>



            {/* STEP 04 */}

            <div className="step-card">

              <div className="step-number">
                04
              </div>

              <div className="step-icon">
                🌱
              </div>

              <h3>
                Take Action
              </h3>

              <p>
                Connect with verified repair and recycling centers
                and give your device a responsible next step.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= SOLUTIONS ================= */}

      <section className="solutions-section">

        <div className="container">

          <div className="section-heading">

            <span>
              ONE DEVICE. FOUR POSSIBILITIES.
            </span>

            <h2>
              What Should Happen
              <br />
              <strong>
                To Your Device?
              </strong>
            </h2>

          </div>



          <div className="solutions-grid">


            {/* REUSE */}

            <div className="solution-card reuse-card">

              <div className="solution-icon">
                🔁
              </div>

              <span className="solution-number">
                01
              </span>

              <h3>
                REUSE
              </h3>

              <p>
                If your device still works, discover useful
                ways to give it another purpose.
              </p>

              <ul>
                <li>
                  Old smartphone → CCTV
                </li>

                <li>
                  Old phone → Music player
                </li>

                <li>
                  Old tablet → Learning device
                </li>
              </ul>

            </div>



            {/* REPAIR */}

            <div className="solution-card repair-card">

              <div className="solution-icon">
                🔧
              </div>

              <span className="solution-number">
                02
              </span>

              <h3>
                REPAIR
              </h3>

              <p>
                If your device can be fixed, connect with
                a verified repair center.
              </p>

              <ul>
                <li>
                  Screen replacement
                </li>

                <li>
                  Battery replacement
                </li>

                <li>
                  Hardware repair
                </li>
              </ul>

            </div>



            {/* RECYCLE */}

            <div className="solution-card recycle-card">

              <div className="solution-icon">
                ♻️
              </div>

              <span className="solution-number">
                03
              </span>

              <h3>
                RECYCLE
              </h3>

              <p>
                When reuse or repair isn't practical,
                find responsible recycling options.
              </p>

              <ul>
                <li>
                  Electronic components
                </li>

                <li>
                  Old computers
                </li>

                <li>
                  Unused devices
                </li>
              </ul>

            </div>



            {/* SAFE DISPOSAL */}

            <div className="solution-card disposal-card">

              <div className="solution-icon">
                🗑️
              </div>

              <span className="solution-number">
                04
              </span>

              <h3>
                SAFE DISPOSAL
              </h3>

              <p>
                Some electronics require special handling.
                We guide you toward safe collection points.
              </p>

              <ul>
                <li>
                  Damaged batteries
                </li>

                <li>
                  Swollen batteries
                </li>

                <li>
                  Hazardous components
                </li>
              </ul>

            </div>

          </div>

        </div>

      </section>



      {/* ================= IMPACT ================= */}

      <section className="impact-section">

        <div className="container">

          <div className="impact-content">


            <div className="impact-text">

              <span>
                OUR IMPACT
              </span>

              <h2>
                Small Actions.
                <br />
                <strong>
                  Big Impact.
                </strong>
              </h2>

              <p>
                Every device that gets reused, repaired, or
                responsibly recycled helps reduce electronic
                waste and protect our environment.
              </p>

              <Link
                to="/about"
                className="text-btn"
              >
                Learn More About ReTechX →
              </Link>

            </div>



            {/* Statistics */}

            <div className="stats-grid">

              <div className="stat-card">

                <strong>
                  428
                </strong>

                <span>
                  KG E-WASTE
                  <br />
                  COLLECTED
                </span>

              </div>


              <div className="stat-card">

                <strong>
                  82
                </strong>

                <span>
                  DEVICES
                  <br />
                  REUSED
                </span>

              </div>


              <div className="stat-card">

                <strong>
                  193
                </strong>

                <span>
                  DEVICES
                  <br />
                  RECYCLED
                </span>

              </div>


              <div className="stat-card">

                <strong>
                  47
                </strong>

                <span>
                  DEVICES
                  <br />
                  REPAIRED
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* ================= FINAL CTA ================= */}

      <section className="cta-section">

        <div className="container">

          <div className="cta-content">

            <span>
              HAVE AN OLD DEVICE?
            </span>

            <h2>
              Don't Throw It Away.
              <br />
              <strong>
                Find Its Next Use.
              </strong>
            </h2>

            <p>
              Tell us about your device and discover the
              smartest thing you can do with it.
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

export default Home;