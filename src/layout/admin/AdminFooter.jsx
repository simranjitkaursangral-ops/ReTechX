
import React from "react";
import { Link } from "react-router-dom";

const AdminFooter = () => {
  return (
    <footer className="user-footer">
      <div className="container">

        <div className="footer-content">

          {/* BRAND */}
          <div className="footer-brand">
            <Link to="/admin/dashboard" className="footer-logo">
              <span>♻</span> ReTechX
            </Link>

            <p>
              Manage e-waste categories efficiently.
              Support a cleaner and greener future through
              responsible technology recycling.
            </p>
          </div>

          {/* ADMIN LINKS */}
          <div className="footer-links">
            <h3>Admin Panel</h3>

            <Link to="/admin/dashboard">
              Dashboard
            </Link>

            <Link to="/admin/add-category">
              Add Category
            </Link>

            <Link to="/admin/manage-category">
              All Categories
            </Link>

            <Link to="/login">
              Login
            </Link>
          </div>

          {/* SOLUTIONS */}
          <div className="footer-links">
            <h3>Our Mission</h3>

            <p>♻ Responsible Recycling</p>

            <p>🔧 Electronic Repair</p>

            <p>🌱 Environmental Protection</p>

            <p>💚 Sustainable Technology</p>
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h3>Contact Us</h3>

            <p>📧 support@retechx.com</p>

            <p>📍 India</p>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} ReTechX Admin Panel.
            All Rights Reserved.
          </p>

          <p>
            From E-Waste to Its Next Life ♻
          </p>
        </div>

      </div>
    </footer>
  );
};

export default AdminFooter;

// import React from "react";
// import { Link } from "react-router-dom";

// const AdminFooter = () => {
//   return (
//     <footer className="admin-footer">

//       <div className="container">

//         <div className="footer-content">


//           {/* ================= BRAND ================= */}

//           <div className="footer-brand">

//             <Link
//               to="/"
//               className="footer-logo"
//             >
//               <span>♻</span> ReTechX
//             </Link>

//             <p>
//               Give your old technology a new life.
//               Reuse, repair, recycle, and dispose responsibly.
//             </p>

//           </div>


//           {/* ================= QUICK LINKS ================= */}

//           <div className="footer-links">

//             <h3>
//               Quick Links
//             </h3>

//             <Link to="/">
//               Home
//             </Link>

//             <Link to="/about">
//               About
//             </Link>

//             <Link to="/how-it-works">
//               How It Works
//             </Link>

//             <Link to="/contact">
//               Contact
//             </Link>

//           </div>


//           {/* ================= SOLUTIONS ================= */}

//           <div className="footer-links">

//             <h3>
//               Our Solutions
//             </h3>

//             <Link to="/analyze">
//               Analyze E-Waste
//             </Link>

//             <Link to="/reuse">
//               Reuse
//             </Link>

//             <Link to="/repair">
//               Repair
//             </Link>

//             <Link to="/recycle">
//               Recycle
//             </Link>

//           </div>


//           {/* ================= CONTACT ================= */}

//           <div className="footer-contact">

//             <h3>
//               Contact Us
//             </h3>

//             <p>
//               📧 support@retechx.com
//             </p>

//             <p>
//               📍 India
//             </p>


//             <div className="social-links">

//               <a href="#facebook">
//                 Facebook
//               </a>

//               <a href="#instagram">
//                 Instagram
//               </a>

//               <a href="#linkedin">
//                 LinkedIn
//               </a>

//             </div>

//           </div>

//         </div>


//         {/* ================= FOOTER BOTTOM ================= */}

//         <div className="footer-bottom">

//           <p>
//             © {new Date().getFullYear()} ReTechX.
//             All Rights Reserved.
//           </p>

//           <p>
//             From E-Waste to Its Next Life ♻
//           </p>

//         </div>

//       </div>

//     </footer>
//   );
// };

// export default AdminFooter;