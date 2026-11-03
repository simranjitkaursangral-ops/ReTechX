
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { toast } from "react-toastify";

function Register() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [load, setload] = useState(false);

  const nav = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    if (load) return;

    setload(true);

    const data = {
      name: Name,
      email: email,
      password: Password,
    };

    try {
      const res = await axios.post(
        "http://localhost:5001/api/student/Register",
        data
      );

      console.log("Register response:", res.data);

      if (res.data.success) {
        toast.success(
          res.data.message || "Registration successful!"
        );

        setName("");
        setEmail("");
        setPassword("");
        setShowPassword(false);

        setTimeout(() => {
          nav("/login");
        }, 1500);
      } else {
        toast.error(
          res.data.message || "Registration failed!"
        );
      }
    } catch (err) {
      console.error(
        "Registration error:",
        err.response?.data || err
      );

      toast.error(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setload(false);
    }
  };

  return (
    <div className="register-page">
      {/* Hero Section */}
      <section className="register-hero">
        <div className="container">
          <span className="section-tag">JOIN RETECHX</span>

          <h1>
            Start Giving Your
            <br />
            <strong>Technology a Second Life.</strong>
          </h1>

          <p>
            Create your ReTechX account and start making smarter
            decisions about your electronic waste.
          </p>
        </div>
      </section>

      {/* Registration Section */}
      <section className="register-section">
        <div className="container">
          <div className="register-wrapper">
            {/* Left Information Section */}
            <div className="register-info">
              <span className="section-tag">
                WELCOME TO RETECHX
              </span>

              <h2>
                Your Old Tech
                <br />
                <strong>Deserves Another Chance.</strong>
              </h2>

              <p>
                ReTechX helps you understand what to do with your
                old electronic devices — reuse, repair, recycle,
                or dispose of them responsibly.
              </p>

              <div className="register-benefits">
                <div className="register-benefit">
                  <span>♻️</span>

                  <div>
                    <strong>Smart E-Waste Decisions</strong>
                    <p>Find the right next step for your device.</p>
                  </div>
                </div>

                <div className="register-benefit">
                  <span>🔧</span>

                  <div>
                    <strong>Verified Solutions</strong>
                    <p>Connect with responsible service centers.</p>
                  </div>
                </div>

                <div className="register-benefit">
                  <span>🌱</span>

                  <div>
                    <strong>Make an Impact</strong>
                    <p>Help reduce unnecessary electronic waste.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form Card */}
            <div className="register-card">
              <div className="register-card-header">
                <div className="register-icon">♻</div>

                <div>
                  <h2>Create Account</h2>
                  <p>Join the ReTechX community</p>
                </div>
              </div>

              {load ? (
                <div className="register-loader">
                  <RingLoader
                    color="#20b486"
                    speedMultiplier={0.5}
                  />
                  <p>Creating your account...</p>
                </div>
              ) : (
                <form onSubmit={handleForm}>
                  {/* Full Name */}
                  <div className="register-form-group">
                    <label htmlFor="registerName">
                      Full Name
                    </label>

                    <input
                      type="text"
                      id="registerName"
                      name="name"
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="register-form-group">
                    <label htmlFor="registerEmail">
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="registerEmail"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      autoComplete="email"
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="register-form-group">
                    <label htmlFor="registerPassword">
                      Password
                    </label>

                    <div className="register-password-wrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="registerPassword"
                        name="password"
                        value={Password}
                        onChange={(e) =>
                          setPassword(e.target.value)
                        }
                        placeholder="Create a password"
                        autoComplete="new-password"
                        required
                      />

                      <button
                        type="button"
                        className="register-password-toggle"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="register-submit"
                    disabled={load}
                  >
                    Create My Account
                    <span>→</span>
                  </button>
                </form>
              )}

              {/* Login Link */}
              <div className="register-bottom">
                <span>Already have an account?</span>

                <button
                  type="button"
                  onClick={() => nav("/login")}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="register-cta">
        <div className="container">
          <div className="register-cta-content">
            <span>READY TO MAKE A DIFFERENCE?</span>

            <h2>
              One Account.
              <br />
              <strong>One More Use.</strong>
            </h2>

            <p>
              Start your journey toward smarter and more responsible
              electronic waste decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;

