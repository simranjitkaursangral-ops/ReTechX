// import React, { useEffect, useState } from "react";

// import {
//   categoryAll,
//   CategoryUpdate,
// } from "../../../services/CategoryServices";

// import { BASEURL } from "../../../endpoints";

// import { Link } from "react-router-dom";

// import { toast } from "react-toastify";

// import Switch from "react-switch";

// import ResponsivePagination from "react-responsive-pagination";

// import "react-responsive-pagination/themes/classic.css";



// const ManageCategory = () => {

//   // ================= CATEGORY DATA =================

//   const [data, setdata] = useState([]);


//   // ================= PAGINATION =================

//   const [TotalPages, setTotalPages] = useState(0);

//   const [currentPage, setCurrentPage] = useState(1);

//   const limit = 10;


//   // ================= FETCH CATEGORY =================

//   useEffect(() => {

//     FatchCategory();

//   }, []);


//   const FatchCategory = () => {

//     categoryAll()
//       .then((res) => {

//         console.log(res.data.data);

//         let totalLenght = res.data.data.length;

//         console.log(
//           "Total Categories --->",
//           totalLenght
//         );


//         let totalPages = Math.ceil(
//           totalLenght / limit
//         );

//         console.log(
//           "Total Pages --->",
//           totalPages
//         );


//         setTotalPages(totalPages);

//         setdata(res.data.data);

//       })
//       .catch((err) => {

//         console.log(
//           "Category fetch error --->",
//           err
//         );

//       });

//   };


//   // ================= CHANGE STATUS =================

//   const ChangeStatus = (id, status) => {

//     console.log(
//       "Category ID --->",
//       id
//     );

//     console.log(
//       "Current Status --->",
//       status
//     );


//     let data = new FormData();


//     data.append(
//       "_id",
//       id
//     );


//     data.append(
//       "status",
//       !status
//     );


//     CategoryUpdate(data)

//       .then((res) => {

//         console.log(
//           "Status response --->",
//           res.data
//         );


//         FatchCategory();


//         toast.success(
//           "Status changed"
//         );

//       })

//       .catch((err) => {

//         console.log(
//           "Status error --->",
//           err
//         );


//         toast.error(
//           "Status not changed"
//         );

//       });

//   };


//   return (

//     <div className="manage-category-page">


//       {/* =================================================
//           HERO
//       ================================================= */}

//       <section className="manage-category-hero">

//         <div className="manage-category-container">

//           <span className="manage-section-tag">
//             RETECHX ADMIN
//           </span>


//           <h1>

//             Manage E-Waste

//             <br />

//             <strong>
//               Categories.
//             </strong>

//           </h1>


//           <p>

//             View, update and manage the electronic
//             waste categories available on ReTechX.

//           </p>

//         </div>

//       </section>


//       {/* =================================================
//           CATEGORY MANAGEMENT SECTION
//       ================================================= */}

//       <section className="manage-category-section">

//         <div className="manage-category-container">


//           {/* ================= CARD ================= */}

//           <div className="manage-category-card">


//             {/* ================= CARD HEADER ================= */}

//             <div className="manage-category-header">


//               <div>

//                 <span className="manage-small-tag">
//                   CATEGORY MANAGEMENT
//                 </span>


//                 <h2>
//                   Manage Categories
//                 </h2>


//                 <p>
//                   View, update and control your existing
//                   e-waste categories.
//                 </p>

//               </div>


//               {/* ADD CATEGORY */}

//               <Link
//                 to="/admin/addcategory"
//                 className="manage-add-btn"
//               >

//                 <span>
//                   +
//                 </span>

//                 Add Category

//               </Link>


//             </div>


//             {/* ================= TABLE ================= */}

//             <div className="manage-table-wrapper">

//               <table className="manage-category-table">


//                 {/* ================= TABLE HEAD ================= */}

//                 <thead>

//                   <tr>

//                     <th>
//                       SNO
//                     </th>

//                     <th>
//                       NAME
//                     </th>

//                     <th>
//                       IMAGE
//                     </th>

//                     <th>
//                       UPDATE
//                     </th>

//                     <th>
//                       STATUS
//                     </th>

//                   </tr>

//                 </thead>


//                 {/* ================= TABLE BODY ================= */}

//                 <tbody>

//                   {

//                     data

//                       .slice(
//                         (currentPage - 1) * limit,
//                         ((currentPage - 1) * limit) + limit
//                       )

//                       .map((el, i) => (

//                         <tr key={el._id}>


//                           {/* SNO */}

//                           <th className="manage-serial">

//                             {
//                               (currentPage - 1) *
//                                 limit +
//                                 i +
//                                 1
//                             }

//                           </th>


//                           {/* NAME */}

//                           <td className="manage-category-name">

//                             {el.name}

//                           </td>


//                           {/* IMAGE */}

//                           <td>

//                             <div className="manage-image-box">

//                               <img
//                                 src={
//                                   BASEURL +
//                                   el.image
//                                 }
//                                 alt={el.name}
//                               />

//                             </div>

//                           </td>


//                           {/* UPDATE */}

//                           <td>

//                             <Link
//                               to={
//                                 "/admin/updateCategory/" +
//                                 el._id
//                               }
//                               className="manage-update-btn"
//                             >

//                               Update

//                             </Link>

//                           </td>


//                           {/* STATUS */}

//                           <td>

//                             <div className="manage-status">

//                               <Switch

//                                 className="react-switch"

//                                 onChange={() => {

//                                   ChangeStatus(
//                                     el._id,
//                                     el.status
//                                   );

//                                 }}

//                                 checked={
//                                   el.status
//                                 }

//                                 aria-label="category status"

//                               />


//                               <span
//                                 className={
//                                   el.status
//                                     ? "manage-status-text active"
//                                     : "manage-status-text inactive"
//                                 }
//                               >

//                                 {
//                                   el.status
//                                     ? "Active"
//                                     : "Inactive"
//                                 }

//                               </span>

//                             </div>

//                           </td>


//                         </tr>

//                       ))

//                   }


//                   {/* ================= PAGINATION ================= */}

//                   <tr className="pagination-row">

//                     <td colSpan={5}>

//                       <div className="manage-pagination">

//                         <ResponsivePagination

//                           current={
//                             currentPage
//                           }

//                           total={
//                             TotalPages
//                           }

//                           onPageChange={
//                             setCurrentPage
//                           }

//                         />

//                       </div>

//                     </td>

//                   </tr>


//                 </tbody>

//               </table>

//             </div>

//           </div>

//         </div>

//       </section>


//     </div>

//   );

// };


// export default ManageCategory;