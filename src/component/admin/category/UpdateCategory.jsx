// import { useEffect, useState } from "react";
// import {
//   CategorySingle,
//   CategoryUpdate
// } from "../../../services/CategoryServices";

// import { useNavigate, useParams } from "react-router-dom";
// import { BASEURL } from "../../../endpoints";

// function UpdateCategory() {

//   const [Name, setName] = useState("");
//   const { id } = useParams();
//   const [Image, setImage] = useState(null);
//   const [URL, setURL] = useState("");

//   const nav = useNavigate();

//   useEffect(() => {
//     FetchSingleCategory();
//   }, []);

//   const FetchSingleCategory = () => {

//     CategorySingle({ _id: id })
//       .then((res) => {

//         console.log(res.data.data);

//         setName(res.data.data.name);
//         setURL(res.data.data.image);

//       })
//       .catch((err) => {

//         console.log(err);

//       });

//   };


//   const HandleForm = (e) => {

//     e.preventDefault();

//     // form Data
//     let data = new FormData();

//     data.append("_id", id);
//     data.append("name", Name);

//     if (!!Image) {
//       data.append("category_image", Image);
//     }

//     CategoryUpdate(data)
//       .then((res) => {

//         console.log(res);

//         nav(-1);

//       })
//       .catch((err) => {

//         console.log(err);

//       });

//   };


//   return (
//     <div className="update-category-page">

//       {/* ================= HERO ================= */}

//       <section className="update-category-hero">

//         <div className="update-category-container">

//           <span className="admin-section-tag">
//             RETECHX ADMIN
//           </span>

//           <h1>
//             Update E-Waste
//             <br />
//             <strong>Category.</strong>
//           </h1>

//           <p>
//             Update the details of your existing electronic
//             waste category.
//           </p>

//         </div>

//       </section>


//       {/* ================= UPDATE SECTION ================= */}

//       <section className="update-category-section">

//         <div className="update-category-container">

//           <div className="update-category-card">

//             {/* LEFT SIDE */}

//             <div className="update-category-info">

//               <span className="admin-small-tag">
//                 CATEGORY MANAGEMENT
//               </span>

//               <h2>
//                 Update Category
//               </h2>

//               <p>
//                 Modify the category name or upload a new
//                 image for this category.
//               </p>


//               {/* CURRENT IMAGE */}

//               <div className="current-category">

//                 <span className="current-image-label">
//                   CURRENT IMAGE
//                 </span>

//                 <div className="current-category-image">

//                   <img
//                     src={BASEURL + URL}
//                     alt={Name}
//                   />

//                 </div>

//                 <h4>
//                   {Name}
//                 </h4>

//               </div>

//             </div>


//             {/* RIGHT SIDE */}

//             <div className="update-category-form">

//               <form
//                 action=""
//                 onSubmit={HandleForm}
//               >

//                 {/* CATEGORY NAME */}

//                 <div className="update-form-group">

//                   <label>
//                     Category Name
//                   </label>

//                   <input
//                     type="text"
//                     value={Name}
//                     required
//                     placeholder="Enter Category Name"
//                     onChange={(e) => {
//                       setName(e.target.value);
//                     }}
//                   />

//                 </div>


//                 {/* CATEGORY IMAGE */}

//                 <div className="update-form-group">

//                   <label>
//                     Category Image
//                   </label>

//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => {
//                       setImage(e.target.files[0]);
//                     }}
//                   />

//                   <small>
//                     Upload a new image only if you want
//                     to replace the current image.
//                   </small>

//                 </div>


//                 {/* BUTTON */}

//                 <button
//                   className="update-category-submit"
//                   type="submit"
//                 >
//                   Update Category
//                   <span>→</span>
//                 </button>


//                 {/* BACK BUTTON */}

//                 <button
//                   type="button"
//                   className="update-category-back"
//                   onClick={() => nav(-1)}
//                 >
//                   ← Back to Categories
//                 </button>

//               </form>

//             </div>

//           </div>

//         </div>

//       </section>

//     </div>
//   );
// }

// export default UpdateCategory;