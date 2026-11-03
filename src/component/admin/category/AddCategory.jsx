import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Addcategory } from '../../../services/CategoryServices'

const AddCategory = () => {

    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [image, setimage] = useState(null)
   

    const nav= useNavigate()

    const submit = (e) => {
        e.preventDefault()

        // let data={
        //     name,
        //     description,
        //     image
        // }

        let data= new FormData()

        data.append("name", name)
        data.append("description", description)
        data.append("image", image)


        console.log(data);

        Addcategory(data).then((res)=>{
            console.log(res);
            
        }).catch((err)=>{
            console.log(err);
            
        })
        

       

    }

    // email="simran@gmail.com"
    // setemail("simran@gmail.com")

    return (
        <>
            {/* bradcam_area_start */}
            <div className="bradcam_area breadcam_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bradcam_text text-center">
                                <h3>Add Category</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bradcam_area_end */}
            {/* ================ Login section start ================= */}
            <section className="contact-section">
                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-lg-8">
                            <form
                                className="form-contact contact_form"
                                action="contact_process.php"
                                method="post"
                                onSubmit={submit}
                                id="contactForm"
                                noValidate="novalidate"
                            >
                                <div className="row justify-content-center">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <input
                                                className="form-control valid"
                                                name="email"
                                                id="email"
                                                value={name}
                                                onChange={(e) => {
                                                    setname(e.target.value)

                                                }}
                                                type="text"
                                               
                                                placeholder="Enter Your name"
                                            />
                                        </div>
                                    </div>

                                  
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <input
                                                className="form-control valid"
                                                name="email"
                                                id="email"
                                                value={description}
                                                onChange={(e) => {
                                                    setdescription(e.target.value)

                                                }}
                                                type="text"
                                               
                                                placeholder="Enter Your description"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <input
                                                className="form-control valid"
                                                name="email"
                                                id="email"
                                               
                                                onChange={(e) => {
                                                    setimage(e.target.files[0])

                                                }}
                                                type="file"
                                               
                                                placeholder="Image "
                                            />
                                        </div>
                                    </div>


                                  


                                </div>
                                <div className="form-group mt-3">
                                    <button
                                        type="submit"
                                        className="button button-contactForm boxed-btn"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
            {/* ================ contact section end ================= */}
        </>

    )
}

export default AddCategory;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { categoryAdd } from "../../../services/CategoryServices";

// function AddCategory() {
//   const [Name, setName] = useState("");
//   const [Image, setImage] = useState(null);

//   const nav = useNavigate();

//   const HandleForm = (e) => {
//     e.preventDefault();

//     let data = new FormData();

//     data.append("name", Name);
//     data.append("category_image", Image);

//     categoryAdd(data)
//       .then((res) => {
//         console.log(res);

//         toast.success("Category added successfully");

//         nav("/admin/managecategory");
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Failed to add category");
//       });
//   };

//   return (
//     <div className="add-category-page">

//       {/* Hero */}
//       <section className="add-category-hero">
//         <div className="container">

//           <span className="section-tag">
//             RETECHX ADMIN
//           </span>

//           <h1>
//             Add E-Waste
//             <br />
//             <strong>Category.</strong>
//           </h1>

//           <p>
//             Create a category to organize electronic waste
//             devices on ReTechX.
//           </p>

//         </div>
//       </section>


//       {/* Form Section */}
//       <section className="add-category-section">
//         <div className="container">

//           <div className="add-category-card">

//             {/* Header */}
//             <div className="add-category-header">

//               <div className="add-category-icon">
//                 ♻
//               </div>

//               <div>
//                 <h2>Add Category</h2>

//                 <p>
//                   Enter category information below.
//                 </p>
//               </div>

//             </div>


//             {/* Form */}
//             <form onSubmit={HandleForm}>

//               {/* Category Name */}
//               <div className="category-form-group">

//                 <label>
//                   Category Name
//                 </label>

//                 <input
//                   type="text"
//                   value={Name}
//                   required
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Enter Category Name"
//                 />

//               </div>


//               {/* Category Image */}
//               <div className="category-form-group">

//                 <label>
//                   Category Image
//                 </label>

//                 <div className="category-upload">

//                   <input
//                     type="file"
//                     accept="image/*"
//                     required
//                     onChange={(e) =>
//                       setImage(e.target.files[0])
//                     }
//                   />

//                   <p>
//                     Upload category image
//                     <br />

//                     <small>
//                       JPG, PNG or JPEG
//                     </small>
//                   </p>

//                 </div>

//                 {Image && (
//                   <p className="category-file-name">
//                     Selected: {Image.name}
//                   </p>
//                 )}

//               </div>


//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="category-submit"
//               >
//                 Add Category
//                 <span>→</span>
//               </button>

//             </form>

//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }

// export default AddCategory;

