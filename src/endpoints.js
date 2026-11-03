// export const GetToken = () => {
//     let token = localStorage.getItem("token");
//     let obj = { Authorization: token };
//     return { headers: obj };
// };


// // ================= KIZA API =================

// export const BASEURL = "https://kizaapi.ksesystem.com/";


// // ================= LOGIN =================

// export const LOGIN = "api/user/login";


// // ================= CUSTOMER =================

// export const CUSTOMERADD = "api/user/add";
// export const CUSTOMERALL = "api/user/all";
// export const CUSTOMERUPDATE = "api/user/update";
// export const CUSTOMERSINGLE = "api/user/single";


// // ================= CATEGORY =================

// export const CATEADD = "api/category/add";
// export const CATEALL = "api/category/all";
// export const SINGLRCATE = "api/category/single";
// export const UPDATECATE = "api/category/update";


// // ================= GNEWS API =================

// export const GNEWSURL = "https://gnews.io/api/v4/";

// export const GNEWS_SEARCH = "search";
// export const GNEWS_HEADLINES = "top-headlines";




export const BASEURL="http://localhost:5001/api/"

export const LOGIN="login"


export const getToken=()=>{
    let token=localStorage.getItem("token")

    let obj={
        authorization:token
    }

    return {headers:obj}
}


export const CATEGORYADD="category/add"
export const CATEGORYALL="category/All"
export const CATEGORYSINGLE="category/GetSingle"


export const GNEWSURL = "https://gnews.io/api/v4/";

export const GNEWS_SEARCH = "search";
export const GNEWS_HEADLINES = "top-headlines";