// import { Link, useNavigate } from "react-router-dom";
// import { Clear, getIsLogin } from "../../services/AuthServices";
// import { toast } from "react-toastify";

// const Header = () => {
//   const nav = useNavigate();

//   // const isLogin = getIsLogin();

//   // const logout = () => {
//   //   Clear();
//   //   toast.success("Logout Successfully");
//   //   nav("/login");
//   // };

//   return (
//     <header className="site-header">
//       <div className="header-container">

//         {/* Logo */}
//         <Link to="/" className="brand">
//           <div className="brand-icon">♻</div>

//           <div className="brand-text">
//             <span className="brand-name">ReTechX</span>

//             <span className="brand-tagline">
//               Give waste a second chance
//             </span>
//           </div>
//         </Link>

//         {/* Navigation */}
//         <nav className="main-nav">

//           <Link to="/">Home</Link>

//           <Link to="/about">About</Link>

//           <Link to="/analyze">Analyze E-Waste</Link>

//           <Link to="/contact">Contact</Link>

//         </nav>

//         {/* Right Side */}
//         <div className="header-actions">

//           {isLogin === "true" ? (
//             <button
//               onClick={logout}
//               className="logout-btn"
//             >
//               Logout
//               <span>↪</span>
//             </button>
//           ) : (
//             <>
//               <Link to="/login" className="login-link">
//                 Login
//               </Link>

//               <Link
//                 to="/register"
//                 className="header-cta"
//               >
//                 Get Started
//                 <span>→</span>
//               </Link>
//             </>
//           )}

//         </div>

//       </div>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">

        {/* Logo */}
        <Link to="/" className="brand">
          <div className="brand-icon">♻</div>

          <div className="brand-text">
            <span className="brand-name">ReTechX</span>

            <span className="brand-tagline">
              Give waste a second chance
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="main-nav">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/analyze">Analyze E-Waste</Link>

          <Link to="/contact">Contact</Link>
        </nav>

        {/* Right Side */}
        <div className="header-actions">
          <Link to="/login" className="login-link">
            Login
          </Link>

          <Link to="/register" className="header-cta">
            Get Started
            <span>→</span>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;


