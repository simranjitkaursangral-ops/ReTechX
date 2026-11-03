import React from "react";
import { Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast"
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ================= USER LAYOUT =================

import Master from "./layout/user/Master";


// ================= USER COMPONENTS =================

import Home from "./component/user/Home";
import About from "./component/user/About";
import Contact from "./component/user/Contact";
import AnalyzeWaste from "./component/user/AnalyzeWaste";
import Result from "./component/user/Result";
import Centers from "./component/user/Centers";
import Login from "./component/user/Login";
import Register from "./component/user/Register";


// ================= ADMIN CATEGORY =================

import AddCategory from "./component/admin/category/AddCategory";
// import ManageCategory from "./component/admin/category/ManageCategory";

// // ================= ADMIN DASHBOARD =================

import AdminDashboard from "./component/admin/AdminDashboard";
import AdminMaster from "./layout/admin/AdminMaster";
// import UpdateCategory from "./component/admin/category/UpdateCategory";

// import ProtectedRoutes from "./layout/admin/ProtectedRoutes";



function App() {

  return (
    <>

      <Routes>

        {/* ================================================= */}
        {/* USER ROUTES */}
        {/* ================================================= */}

        <Route path="/" element={<Master/>}>

          {/* Home */}
          <Route
            index
            element={<Home />}
          />

          {/* About */}
          <Route
            path="about"
            element={<About />}
          />

          {/* Contact */}
          <Route
            path="contact"
            element={<Contact />}
          />

          {/* Analyze E-Waste */}
          <Route
            path="analyze"
            element={<AnalyzeWaste />}
          />

          {/* Result */}
          <Route
            path="result"
            element={<Result />}
          />

          {/* Centers */}
          <Route
            path="centers"
            element={<Centers />}
          />

          {/* Login */}
          <Route
            path="login"
            element={<Login />}
          />

          {/* Register */}
          <Route
            path="register"
            element={<Register />}
          />

        </Route>

        {/* <Route path="/admin" element={<ProtectedRoutes />}> */}
          <Route path="/admin" element={<AdminMaster/>}>
            <Route index element={<AdminDashboard/>}></Route>
            <Route path="/admin/addcategory" element={<AddCategory/>}></Route>
            {/* <Route path="/admin/manageCategory" element={<ManageCategory/>}></Route>
            <Route path="/admin/updateCategory/:id" element={<UpdateCategory/>}></Route> */}
          </Route>


            {/* </Route> */}
      </Routes>


      {/* ================================================= */}
      {/* TOAST */}
      {/* ================================================= */}

      <Toaster
  position="top-center"
  reverseOrder={false}
/>

    </>
  );
}


export default App;