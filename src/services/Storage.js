export const SetData=(data)=>{
    // console.log("this is storage",data);

    localStorage.setItem("token", data.token)
    localStorage.setItem("email", data.data.email)
    localStorage.setItem("name", data.data.name)
    localStorage.setItem("userType", data.data.userType)
    localStorage.setItem("uid", data.data._id)
    
}