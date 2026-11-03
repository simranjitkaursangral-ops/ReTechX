// import axios from "axios";

// import { BASEURL, LOGIN } from "../endpoints";

// export const WebLogin = async (data) => {
//   return await axios.post(BASEURL + LOGIN, data);
// };

// export const setData = (data) => {

//   localStorage.setItem("token", data.token);

//   localStorage.setItem("_id", data.data._id);

//   localStorage.setItem("email", data.data.email);

//   localStorage.setItem("name", data.data.name);

//   localStorage.setItem("userType", data.data.userType);

//   // Login status
//   localStorage.setItem("isLogin", "true");
// };

// export const getIsLogin = () => {
//   return localStorage.getItem("isLogin");
// };

// export const Clear = () => {
//   return localStorage.clear();
// };

// export const getUserType = () => {
//   return localStorage.getItem("userType");
// };


import axios from "axios";
import { BASEURL, LOGIN } from "../endpoints";


export const userLogin = async (data) => {
   return await axios.post( BASEURL+ LOGIN, data)
}
