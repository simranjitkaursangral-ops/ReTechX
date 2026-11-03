
import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";

const AdminMaster = () => {
  return (
    <>
      <AdminHeader />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AdminMaster;
// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import AdminHeader from "./AdminHeader";
// import AdminFooter from "./AdminFooter";

// const AdminLayout = () => {

//   return (
//     <>
//       <AdminHeader />

//       <Outlet />

//       <AdminFooter />
//     </>
//   );
// };

// export default AdminLayout;