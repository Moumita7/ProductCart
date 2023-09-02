import axios from "axios"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionType"
import p from "../../Components/assets/products.json"

const getProductsRequestAction=()=>{
    return {type:GET_PRODUCT_REQUEST}
}

const getProductsSuccessAction=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload}
}
const getProductsFailureAction=()=>{
    return {type:GET_PRODUCT_FAILURE}
}

// export const  getBooks =(dispatch)=>{
//     dispatch(getBooksRequestAction())
//     axios.get("https://json-server-vercel-psi-ebon.vercel.app/books")
//     .then((res)=>{
//         // console.log("bk",res.data)
//      dispatch(getBooksSuccessAction(res.data))
//     })
//     .catch((err)=>{
//         console.log(err)
//         dispatch(getBooksFailureAction())
//     })
// }


export const  getBooks = (params)=>(dispatch)=>{
    dispatch(getProductsRequestAction()) //loading
    axios.get({p},params)
    //

    //
    .then((res)=>{
        // console.log("bk",res.data) 
     dispatch(getProductsSuccessAction(res.data))
    })
    .catch((err)=>{
        console.log(err)
        dispatch(getProductsFailureAction())
    })
}


// let obj={
//     params:{
//         // category:
//         _sort:"price",
//         _order:"asc"
//     }
// }
