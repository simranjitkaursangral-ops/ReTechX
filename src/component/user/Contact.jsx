import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Contact Form Data:", formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  };


  return (

    <div className="contact-page">


      {/* ================= HERO ================= */}

      <section className="contact-hero">

        <div className="container">

          <span className="section-tag">
            GET IN TOUCH
          </span>

          <h1>

            Let's Make E-Waste

            <br />

            <strong>
              Part of the Solution.
            </strong>

          </h1>

          <p>
            Have a question, suggestion, or want to partner
            with ReTechX? We'd love to hear from you.
          </p>

        </div>

      </section>



      {/* ================= CONTACT SECTION ================= */}

      <section className="contact-section">

        <div className="container">

          <div className="contact-grid">


            {/* ================= CONTACT INFORMATION ================= */}

            <div className="contact-info">

              <span className="section-tag">
                CONTACT US
              </span>

              <h2>

                We're Here

                <br />

                <strong>
                  To Help.
                </strong>

              </h2>

              <p>
                Whether you need help understanding what to do
                with an old device or want to work with ReTechX,
                feel free to reach out.
              </p>


              {/* Email */}

              <div className="contact-item">

                <div className="contact-icon">
                  📧
                </div>

                <div>

                  <span>
                    Email
                  </span>

                  <h3>
                    support@retechx.com
                  </h3>

                </div>

              </div>



              {/* Location */}

              <div className="contact-item">

                <div className="contact-icon">
                  📍
                </div>

                <div>

                  <span>
                    Location
                  </span>

                  <h3>
                    India
                  </h3>

                </div>

              </div>



              {/* Support */}

              <div className="contact-item">

                <div className="contact-icon">
                  💬
                </div>

                <div>

                  <span>
                    Support
                  </span>

                  <h3>
                    Available Online
                  </h3>

                </div>

              </div>



              {/* Contact Note */}

              <div className="contact-note">

                <span>
                  ♻️
                </span>

                <p>
                  Every conversation can help create a cleaner
                  and more sustainable future.
                </p>

              </div>

            </div>



            {/* ================= CONTACT FORM ================= */}

            <div className="contact-form-box">

              <h2>
                Send Us a Message
              </h2>

              <p>
                Fill out the form and we'll get back to you.
              </p>


              <form onSubmit={handleSubmit}>


                {/* Name + Email */}

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>



                {/* Subject */}

                <div className="form-group">

                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />

                </div>



                {/* Message */}

                <div className="form-group">

                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>



                {/* Submit */}

                <button
                  type="submit"
                  className="primary-btn contact-submit"
                >
                  Send Message →
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>



      {/* ================= BOTTOM CTA ================= */}

      <section className="contact-cta">

        <div className="container">

          <div className="contact-cta-content">

            <span>
              HAVE AN OLD DEVICE?
            </span>

            <h2>

              Don't Know What To Do

              <br />

              <strong>
                With Your E-Waste?
              </strong>

            </h2>

            <p>
              Let ReTechX help you find the right next step.
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

export default Contact;