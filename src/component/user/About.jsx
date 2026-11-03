import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">

      {/* ================= HERO ================= */}

      <section className="about-hero">

        <div className="container">

          <span className="section-tag">
            ABOUT RETECHX
          </span>

          <h1>
            Giving Old Technology
            <br />
            <strong>A Better Future.</strong>
          </h1>

          <p>
            ReTechX is an intelligent e-waste recovery platform
            that helps people decide what to do with their old
            electronic devices instead of simply throwing them away.
          </p>

        </div>

      </section>



      {/* ================= PROBLEM ================= */}

      <section className="about-problem">

        <div className="container">

          <div className="about-grid">

            <div className="about-image-box">

              <div className="about-big-icon">
                💻
              </div>

              <div className="about-floating-card">

                <strong>
                  ♻️
                </strong>

                <span>
                  Give technology
                  <br />
                  another chance.
                </span>

              </div>

            </div>



            <div className="about-content">

              <span className="section-tag">
                THE PROBLEM
              </span>

              <h2>
                What Happens To
                <br />
                <strong>Our Old Electronics?</strong>
              </h2>

              <p>
                Every year, people replace smartphones, laptops,
                chargers, batteries, tablets, and other electronic
                devices. But many people don't know what they should
                do with their old devices.
              </p>

              <p>
                Some devices can still be reused. Some can be
                repaired. Others should be recycled or handled
                through special collection points.
              </p>

              <p>
                Simply throwing everything into the garbage can
                create environmental problems and waste valuable
                materials.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= SOLUTION ================= */}

      <section className="about-solution">

        <div className="container">

          <div className="section-heading">

            <span>
              OUR SOLUTION
            </span>

            <h2>
              We Don't Just Collect Waste.
              <br />
              <strong>
                We Find Its Next Possibility.
              </strong>
            </h2>

            <p>
              ReTechX focuses on decision-making. Instead of simply
              telling users where to dispose of a device, the platform
              first determines the most suitable action.
            </p>

          </div>



          <div className="solution-flow">

            <div className="flow-item">

              <div className="flow-icon">
                📱
              </div>

              <h3>
                Your Device
              </h3>

              <p>
                Tell us about your old electronic device.
              </p>

            </div>


            <div className="flow-arrow">
              →
            </div>


            <div className="flow-item">

              <div className="flow-icon">
                🧠
              </div>

              <h3>
                Analyze
              </h3>

              <p>
                ReTechX evaluates its condition and details.
              </p>

            </div>


            <div className="flow-arrow">
              →
            </div>


            <div className="flow-item">

              <div className="flow-icon">
                🎯
              </div>

              <h3>
                Decision
              </h3>

              <p>
                The platform recommends the best next step.
              </p>

            </div>


            <div className="flow-arrow">
              →
            </div>


            <div className="flow-item">

              <div className="flow-icon">
                🌱
              </div>

              <h3>
                Take Action
              </h3>

              <p>
                Reuse, repair, recycle, or dispose safely.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= FOUR DECISIONS ================= */}

      <section className="about-decisions">

        <div className="container">

          <div className="section-heading">

            <span>
              OUR DECISION SYSTEM
            </span>

            <h2>
              Four Possible Paths.
              <br />
              <strong>
                One Smarter Decision.
              </strong>
            </h2>

          </div>



          <div className="decision-grid">


            {/* REUSE */}

            <div className="decision-card">

              <span className="decision-number">
                01
              </span>

              <div className="decision-icon">
                🔁
              </div>

              <h3>
                Reuse
              </h3>

              <p>
                If the device is still functional, ReTechX can
                suggest practical ways to give it another purpose.
              </p>

            </div>



            {/* REPAIR */}

            <div className="decision-card">

              <span className="decision-number">
                02
              </span>

              <div className="decision-icon">
                🔧
              </div>

              <h3>
                Repair
              </h3>

              <p>
                If the device is not working but can potentially
                be fixed, users can find verified repair centers.
              </p>

            </div>



            {/* RECYCLE */}

            <div className="decision-card">

              <span className="decision-number">
                03
              </span>

              <div className="decision-icon">
                ♻️
              </div>

              <h3>
                Recycle
              </h3>

              <p>
                Devices that are no longer practical to repair
                can be directed toward responsible recycling.
              </p>

            </div>



            {/* SAFE DISPOSAL */}

            <div className="decision-card">

              <span className="decision-number">
                04
              </span>

              <div className="decision-icon">
                🗑️
              </div>

              <h3>
                Safe Disposal
              </h3>

              <p>
                Certain electronic items require special handling.
                ReTechX guides users toward appropriate collection
                points.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= VISION ================= */}

      <section className="vision-section">

        <div className="container">

          <div className="vision-content">

            <span className="section-tag">
              OUR VISION
            </span>

            <h2>
              A World Where
              <br />
              <strong>
                Nothing Useful Goes To Waste.
              </strong>
            </h2>

            <p>
              We want to make responsible e-waste management simple,
              accessible, and intelligent. Every device deserves a
              chance to be reused, repaired, recycled, or safely
              handled.
            </p>



            <div className="vision-points">

              <div>
                <strong>
                  01
                </strong>

                <span>
                  Reduce unnecessary e-waste
                </span>
              </div>


              <div>
                <strong>
                  02
                </strong>

                <span>
                  Promote device reuse and repair
                </span>
              </div>


              <div>
                <strong>
                  03
                </strong>

                <span>
                  Connect users with verified centers
                </span>
              </div>

            </div>



            <Link
              to="/analyze"
              className="primary-btn"
            >
              Analyze Your Device →
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;