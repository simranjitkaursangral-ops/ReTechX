// import React, { Children, useEffect } from 'react'
// import { getUserType } from '../../services/Authservices'
// import { Outlet, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

// const ProtectedRoutes = () => {

//     const nav= useNavigate()
//     useEffect(() => {
//         let userType = getUserType()

//         if (userType != 1) {
//             toast.warning("Please Login First")
//             nav("/login")
//         }
//     }, [])

//     return <Outlet/>
// }

// export default ProtectedRoutes