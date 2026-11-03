import axios from 'axios'
import React, { useState } from 'react'

import toast from 'react-hot-toast'
import { SetData } from '../../services/Storage'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../services/AuthServices'

const Login = () => {

    const [email, setemail] = useState("tanvi@gmail.com")
    const [password, setpassword] = useState("tanvi@gmail.com")

    const nav= useNavigate()

    const submit = (e) => {
        e.preventDefault()

        console.log(email);
        console.log(password);

        let data = {
            email: email,
            password: password,
        }

        userLogin(data).then((res) => {
            if (res.data.success) {
                toast.success(res.data.message)

                SetData(res.data)

                if(res.data.data.userType==1){
                    nav("/admin")
                }else{
                    nav("/")

                }

                
                
            } else {
                toast.error(res.data.message)

            }

        }).catch((err) => {
            console.log(err);
            toast.error(err.message)


        })

    }

 

    return (
        <>
            {/* bradcam_area_start */}
            <div className="bradcam_area breadcam_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bradcam_text text-center">
                                <h3>Login</h3>
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
                                                value={email}
                                                onChange={(e) => {
                                                    setemail(e.target.value)

                                                }}
                                                type="email"
                                                onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter email address'"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <input
                                                className="form-control valid"
                                                name="password"
                                                id="password"
                                                value={password}
                                                onChange={(e) => {
                                                    setpassword(e.target.value)

                                                }}
                                                type="password"
                                                onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter your password'"
                                                placeholder="Enter your password"
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

export default Login;



// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { RingLoader } from "react-spinners";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [email, setemail] = useState("tanvi@gmail.com");
//   const [password, setpassword] = useState("tanvi@gmail.com");
//   const [showPassword, setShowPassword] = useState(false);
//   const [load, setLoad] = useState(false);

//   const nav = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();

//     if (load) return;

//     setLoad(true);

//     const data = {
//       email: email,
//       password: password,
//     };

//     try {
//       const res = await axios.post(
//         "http://localhost:5001/api/login",
//         data
//       );

//       console.log("Login response:", res.data);

//       if (res.data.success) {
//         toast.success(res.data.message || "Login successful!");

//         const userData = res.data.data;

//         if (userData) {
//           if (userData.token) {
//             localStorage.setItem("token", userData.token);
//           }

//           if (userData._id) {
//             localStorage.setItem("_id", userData._id);
//           }

//           if (userData.email) {
//             localStorage.setItem("email", userData.email);
//           }

//           if (userData.name) {
//             localStorage.setItem("name", userData.name);
//           }

//           if (userData.userType) {
//             localStorage.setItem("userType", userData.userType);
//           }
//         }

//         localStorage.setItem("isLogin", "true");

//         setTimeout(() => {
//           nav("/");
//         }, 1000);
//       } else {
//         toast.error(
//           res.data.message || "Invalid email or password."
//         );
//       }
//     } catch (err) {
//       console.error("Login error:", err.response?.data || err);

//       toast.error(
//         err.response?.data?.message ||
//           "Login failed. Please check your email and password."
//       );
//     } finally {
//       setLoad(false);
//     }
//   };

//   return (
//     <div className="login-page">
//       {/* Hero Section */}
//       <section className="login-hero">
//         <div className="container">
//           <span className="section-tag">WELCOME BACK</span>

//           <h1>
//             Welcome Back to
//             <br />
//             <strong>ReTechX.</strong>
//           </h1>

//           <p>
//             Continue your journey toward smarter and more responsible
//             electronic waste decisions.
//           </p>
//         </div>
//       </section>

//       {/* Login Section */}
//       <section className="login-section">
//         <div className="container">
//           <div className="login-wrapper">
//             {/* Left Information Section */}
//             <div className="login-info">
//               <span className="section-tag">YOUR IMPACT MATTERS</span>

//               <h2>
//                 Give Your Old Tech
//                 <br />
//                 <strong>A Better Future.</strong>
//               </h2>

//               <p>
//                 Sign in to ReTechX to explore responsible solutions
//                 for your electronic devices and discover ways to
//                 reuse, repair, and recycle them.
//               </p>

//               <div className="login-benefits">
//                 <div className="login-benefit">
//                   <span>♻️</span>
//                   <div>
//                     <strong>Smart Recommendations</strong>
//                     <p>Find the right next step for your old devices.</p>
//                   </div>
//                 </div>

//                 <div className="login-benefit">
//                   <span>🔧</span>
//                   <div>
//                     <strong>Find Responsible Solutions</strong>
//                     <p>Discover suitable repair and recycling options.</p>
//                   </div>
//                 </div>

//                 <div className="login-benefit">
//                   <span>🌱</span>
//                   <div>
//                     <strong>Create a Greener Future</strong>
//                     <p>Make better choices for the environment.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Login Form Card */}
//             <div className="login-card">
//               <div className="login-card-header">
//                 <div className="login-icon">♻</div>

//                 <div>
//                   <h2>Welcome Back</h2>
//                   <p>Login to your ReTechX account</p>
//                 </div>
//               </div>

//               {load ? (
//                 <div className="login-loader">
//                   <RingLoader
//                     color="#20b486"
//                     speedMultiplier={0.5}
//                   />
//                   <p>Logging you in...</p>
//                 </div>
//               ) : (
//                 <form onSubmit={submit}>
//                   {/* Email */}
//                   <div className="login-form-group">
//                     <label htmlFor="email">Email Address</label>

//                     <input
//                       className="form-control"
//                       name="email"
//                       id="email"
//                       value={email}
//                       onChange={(e) => setemail(e.target.value)}
//                       type="email"
//                       placeholder="Enter your email"
//                       autoComplete="email"
//                       required
//                     />
//                   </div>

//                   {/* Password */}
//                   <div className="login-form-group">
//                     <label htmlFor="password">Password</label>

//                     <div className="login-password-wrapper">
//                       <input
//                         className="form-control"
//                         name="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setpassword(e.target.value)}
//                         type={showPassword ? "text" : "password"}
//                         placeholder="Enter your password"
//                         autoComplete="current-password"
//                         required
//                       />

//                       <button
//                         type="button"
//                         className="login-password-toggle"
//                         onClick={() =>
//                           setShowPassword(!showPassword)
//                         }
//                       >
//                         {showPassword ? "Hide" : "Show"}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     className="login-submit"
//                     disabled={load}
//                   >
//                     Login to Account
//                     <span>→</span>
//                   </button>
//                 </form>
//               )}

//               {/* Register Link */}
//               <div className="login-bottom">
//                 <span>Don't have an account?</span>

//                 <button
//                   type="button"
//                   onClick={() => nav("/register")}
//                 >
//                   Create Account
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Bottom CTA */}
//       <section className="login-cta">
//         <div className="container">
//           <div className="login-cta-content">
//             <span>SMALL ACTIONS. BIG IMPACT.</span>

//             <h2>
//               Your Choices
//               <br />
//               <strong>Can Make a Difference.</strong>
//             </h2>

//             <p>
//               Give electronics another chance and help build a
//               more sustainable future.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Login;

