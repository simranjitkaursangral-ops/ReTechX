import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AnalyzeWaste = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    deviceType: "",
    age: "",
    working: "",
    condition: "",
    battery: "",
    screen: "",
  });

  const [image, setImage] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
    }
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/result", {
      state: {
        ...formData,
        image: image,
      },
    });
  };

  return (
    <div className="analyze-page">

      {/* ================= HERO ================= */}

      <section className="analyze-hero">

        <div className="container">

          <span className="section-tag">
            ANALYZE YOUR E-WASTE
          </span>

          <h1>
            What Can I Do With
            <br />
            <strong>This Device?</strong>
          </h1>

          <p>
            Tell us about your old electronic device and we'll help
            you find its best next use.
          </p>

        </div>

      </section>


      {/* ================= FORM ================= */}

      <section className="analyze-section">

        <div className="container">

          <div className="analyze-card">

            <div className="form-header">

              <span className="form-icon">
                ♻️
              </span>

              <div>

                <h2>
                  Device Information
                </h2>

                <p>
                  Enter a few details about your electronic device.
                </p>

              </div>

            </div>


            <form onSubmit={handleSubmit}>

              {/* ================= DEVICE TYPE ================= */}

              <div className="form-group">

                <label>
                  Device Type
                </label>

                <select
                  name="deviceType"
                  value={formData.deviceType}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select your device
                  </option>

                  <option value="Laptop">
                    Laptop
                  </option>

                  <option value="Mobile Phone">
                    Mobile Phone
                  </option>

                  <option value="Tablet">
                    Tablet
                  </option>

                  <option value="Desktop">
                    Desktop
                  </option>

                  <option value="Monitor">
                    Monitor
                  </option>

                  <option value="Television">
                    Television
                  </option>

                  <option value="Charger">
                    Charger
                  </option>

                  <option value="Keyboard">
                    Keyboard
                  </option>

                  <option value="Mouse">
                    Mouse
                  </option>

                  <option value="Printer">
                    Printer
                  </option>

                  <option value="Battery">
                    Battery
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              {/* ================= AGE ================= */}

              <div className="form-group">

                <label>
                  Device Age
                </label>

                <select
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select age
                  </option>

                  <option value="Less than 1 year">
                    Less than 1 year
                  </option>

                  <option value="1-3 years">
                    1 - 3 years
                  </option>

                  <option value="3-5 years">
                    3 - 5 years
                  </option>

                  <option value="5-7 years">
                    5 - 7 years
                  </option>

                  <option value="More than 7 years">
                    More than 7 years
                  </option>

                </select>

              </div>


              {/* ================= WORKING ================= */}

              <div className="form-group">

                <label>
                  Is the device working?
                </label>

                <div className="radio-group">

                  <label className="radio-option">

                    <input
                      type="radio"
                      name="working"
                      value="Yes"
                      checked={formData.working === "Yes"}
                      onChange={handleChange}
                      required
                    />

                    <span>
                      Yes
                    </span>

                  </label>


                  <label className="radio-option">

                    <input
                      type="radio"
                      name="working"
                      value="No"
                      checked={formData.working === "No"}
                      onChange={handleChange}
                    />

                    <span>
                      No
                    </span>

                  </label>


                  <label className="radio-option">

                    <input
                      type="radio"
                      name="working"
                      value="Partially"
                      checked={formData.working === "Partially"}
                      onChange={handleChange}
                    />

                    <span>
                      Partially
                    </span>

                  </label>

                </div>

              </div>


              {/* ================= CONDITION ================= */}

              <div className="form-group">

                <label>
                  Overall Condition
                </label>

                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select condition
                  </option>

                  <option value="Excellent">
                    Excellent
                  </option>

                  <option value="Good">
                    Good
                  </option>

                  <option value="Average">
                    Average
                  </option>

                  <option value="Poor">
                    Poor
                  </option>

                  <option value="Damaged">
                    Damaged
                  </option>

                </select>

              </div>


              {/* ================= BATTERY ================= */}

              <div className="form-group">

                <label>
                  Battery Condition
                </label>

                <select
                  name="battery"
                  value={formData.battery}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select battery condition
                  </option>

                  <option value="Good">
                    Good
                  </option>

                  <option value="Weak">
                    Weak
                  </option>

                  <option value="Dead">
                    Dead
                  </option>

                  <option value="Swollen">
                    Swollen
                  </option>

                  <option value="No Battery">
                    No Battery
                  </option>

                  <option value="Not Applicable">
                    Not Applicable
                  </option>

                </select>

              </div>


              {/* ================= SCREEN ================= */}

              <div className="form-group">

                <label>
                  Screen Condition
                </label>

                <select
                  name="screen"
                  value={formData.screen}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select screen condition
                  </option>

                  <option value="Excellent">
                    Excellent
                  </option>

                  <option value="Good">
                    Good
                  </option>

                  <option value="Cracked">
                    Cracked
                  </option>

                  <option value="Broken">
                    Broken
                  </option>

                  <option value="No Screen">
                    No Screen
                  </option>

                  <option value="Not Applicable">
                    Not Applicable
                  </option>

                </select>

              </div>


              {/* ================= IMAGE ================= */}

              <div className="form-group">

                <label>
                  Upload Device Photo
                </label>

                <div className="upload-box">

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />

                  <p>
                    Upload a photo of your device
                    <br />
                    <small>
                      JPG, PNG or JPEG
                    </small>
                  </p>

                </div>


                {image && (
                  <p className="file-name">
                    Selected: {image.name}
                  </p>
                )}

              </div>


              {/* ================= SUBMIT ================= */}

              <button
                type="submit"
                className="analyze-btn"
              >
                🧠 Analyze My Device
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
};

export default AnalyzeWaste;