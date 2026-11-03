
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <header className="admin-site-header">
      <div className="admin-header-container">

        {/* Brand */}
        <Link to="/admin/admin-dashboard" className="admin-brand">
          <div className="admin-brand-icon">♻</div>

          <div className="admin-brand-text">
            <span className="admin-brand-name">ReTechX</span>
            <span className="admin-brand-tagline">
              Admin Panel
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="admin-main-nav">

          <Link
            to="/admin"
            className="admin-nav-link"
          >
            Dashboard
          </Link>

          {/* Category Dropdown */}
          <div
            className={`admin-category-dropdown ${
              showCategory ? "active" : ""
            }`}
          >
            <button
              type="button"
              className="admin-nav-link admin-category-button"
              onClick={() => setShowCategory(!showCategory)}
              aria-expanded={showCategory}
            >
              Category
              <span className="admin-dropdown-arrow">⌄</span>
            </button>

            {showCategory && (
              <div className="admin-category-menu">
                <Link
                  to="/admin/addcategory"
                  onClick={() => setShowCategory(false)}
                >
                  <span className="admin-menu-icon">＋</span>
                  <span>
                    <strong>Add Category</strong>
                    <small>Create a new category</small>
                  </span>
                </Link>

                <Link
                  to="/admin/managecategory"
                  onClick={() => setShowCategory(false)}
                >
                  <span className="admin-menu-icon">☷</span>
                  <span>
                    <strong>All Categories</strong>
                    <small>View and manage categories</small>
                  </span>
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Admin Actions */}
        <div className="admin-header-actions">
          <span className="admin-status-dot"></span>

          <span className="admin-label">Administrator</span>

          <Link to="/login" className="admin-logout-button">
            Logout <span>↗</span>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default AdminHeader;




// import { useState } from "react";
// import { Link } from "react-router-dom";

// function AdminHeader() {

//   const [showCategory, setShowCategory] = useState(false);

//   return (
//     <header className="admin-header">

//       {/* MAIN NAVBAR */}
//       <div className="admin-navbar">

//         <div className="admin-navbar-container">

//           {/* BRAND */}
//           <Link to="/admin" className="admin-brand">

//             <div className="admin-brand-icon">
//               ♻
//             </div>

//             <div className="admin-brand-text">

//               <div className="admin-brand-name">
//                 ReTechX
//               </div>

//               <div className="admin-brand-tagline">
//                 Admin Panel
//               </div>

//             </div>

//           </Link>


//           {/* NAVIGATION */}
//           <nav className="admin-nav">

//             {/* DASHBOARD */}
//             <Link to="/admin">
//               Dashboard
//             </Link>


//             {/* CATEGORIES */}
//             <div className="admin-category-dropdown">

//               <button
//                 type="button"
//                 onClick={() => setShowCategory(!showCategory)}
//               >
//                 Categories
//                 <span>
//                   {showCategory ? "▲" : "▼"}
//                 </span>
//               </button>


//               {/* ONLY SHOW AFTER CLICK */}
//               {showCategory && (
//                 <div className="admin-dropdown-menu">

//                   <Link
//                     to="/admin/addCategory"
//                     onClick={() => setShowCategory(false)}
//                   >
//                     ＋ Add Category
//                   </Link>

//                   <Link
//                     to="/admin/manageCategory"
//                     onClick={() => setShowCategory(false)}
//                   >
//                     ☷ Manage Category
//                   </Link>

//                 </div>
//               )}

//             </div>


//             {/* MANAGE CUSTOMER */}
//             <Link to="/admin/managecustomer">
//               Manage Customer
//             </Link>


//             {/* LOGOUT */}
//             <Link to="/login">
//               Logout
//             </Link>

//           </nav>


//           {/* USER ICON */}
//           <div className="admin-user-icon">
//             <i className="fas fa-user"></i>
//           </div>

//         </div>

//       </div>

//     </header>
//   );
// }

// export default AdminHeader;
