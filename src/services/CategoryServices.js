// import axios from "axios"
// import { BASEURL, CATEADD, CATEALL, GetToken, SINGLRCATE, UPDATECATE } from "../endpoints"


// export const categoryAdd=async(data)=>{
//    return await axios.post(BASEURL+CATEADD, data,GetToken())
// }
// // axios.post(api, body, header )  request

// export const categoryAll=async(data)=>{
//    return await axios.post(BASEURL+CATEALL,data,GetToken())
// }

// export const CategorySingle=async(data)=>{
//    return await axios.post(BASEURL+SINGLRCATE,data,GetToken())
// }
// export const CategoryUpdate=async(data)=>{
//    return await axios.post(BASEURL+UPDATECATE,data,GetToken())
// }
import axios from "axios"

import { BASEURL, CATEGORYADD, CATEGORYALL, getToken } from "../endpoints"


export const Addcategory= async(data)=>{
   return await axios.post(BASEURL+ CATEGORYADD, data, getToken())

}
export const AllCategory= async()=>{
   return await axios.post(BASEURL+ CATEGORYALL)

}