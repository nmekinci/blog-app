

// import React, { createContext, useContext, useEffect, useReducer } from "react";
// import { initialBlogState, reducerBlog } from "../reducer/blogReducer";
// import axios from "axios";
// import useAxios from "../service/useAxios";
// import { AuthContext } from "./AuthContext";


// export const BlogContext = createContext();

// const BlogContextProvider = ({ children }) => {
//   const url = process.env.REACT_APP_BASE_URL;
//   const {axiosWithKey, axiosPublic} = useAxios()


//   const {state:authState} = useContext(AuthContext)
//   const [state, dispatch] = useReducer(reducerBlog, initialBlogState);
//   const {
//     loading,
//     id,
//     title,
//     content,
//     image,
//     category,
//     publish_date,
//     author,
//     status,
//     slug,
//     comments,
//     category_name,
//     likes,
//     post_views,
//     comment_count,
//     likes_n,
//     error,
//     // key,
//     data,
//   } = authState

//   useEffect(() => {
//     getBlogs()
//     getBlogWithId(1)
  
   
//   }, [])
  

//   const getBlogs = async () => {
//     dispatch({type: "START"})
//     // console.log(state);
//     try {
//         const {data} = await axiosPublic(`${url}api/blogs/`)
//         dispatch({type:"SUCCESS", payload: data})
//         // console.log(data);
//         // console.log(state);
//     } catch (error) {
//         dispatch({type:"FAIL",payload: error})
//         console.log(error);
//     }
//   }
//   const getBlogWithId = async (id) => {
//     dispatch({type: "START"})
//     // console.log(state);
//     try {
//         const {data} = await axiosWithKey.get(`api/blogs/${id}/`)
//         dispatch({type:"SUCCESS"})
//         // console.log(data);
//         // console.log(state);
//     } catch (error) {
//         dispatch({type:"FAIL",payload: error})
//         console.log(error);
//     }
//   }


// console.log(state);
// console.log(authState);
//   const values = {getBlogs, getBlogWithId};
//   return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
// };

// export default BlogContextProvider;




import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initialBlogState, reducerBlog } from "../reducer/blogReducer";
import axios from "axios";
import useAxios from "../service/useAxios";
import { AuthContext } from "./AuthContext";
export const BlogContext = createContext();
const BlogContextProvider = ({ children }) => {
  const url = process.env.REACT_APP_BASE_URL;
   const {state:authState, loginUser} = useContext(AuthContext)
  const {axiosWithKey, axiosPublic} = useAxios(authState)
  const [state, dispatch] = useReducer(reducerBlog, initialBlogState);
  const {
    loading,
    id,
    title,
    content,
    image,
    category,
    publish_date,
    author,
    status,
    slug,
    comments,
    category_name,
    likes,
    post_views,
    comment_count,
    likes_n,
    error,
    // key,
    data,
  } = state
  useEffect(() => {
    loginUser({
      username: "pc117",
      email: "nm.ekinci@gmail.com",
      password: "654654Me.",
    })
    getBlogs()
    // getBlogWithId("1")
  }, [])
  useEffect(() => {
    if(authState.key){
      getBlogWithId("1")
    }
  
    
  }, [authState])
  
  const getBlogs = async () => {
    dispatch({type: "START"})
    // console.log(state);
    try {
        const {data} = await axiosPublic(`${url}api/blogs/`)
        dispatch({type:"SUCCESS", payload: data})
        // console.log(data);
        // console.log(state);
    } catch (error) {
        dispatch({type:"FAIL",payload: error})
        console.log(error);
    }
  }
  const getBlogWithId = async (id) => {
    dispatch({type: "START"})
    // console.log(state);
    try {
        const {data} = await axiosWithKey(`api/blogs/${id}/`)
        dispatch({type:"SUCCESS",payload: data})
        // console.log(data);
        // console.log(state);
    } catch (error) {
        dispatch({type:"FAIL",payload: error})
        console.log(error);
    }
  }
console.log(state);
  const values = {getBlogs, getBlogWithId};
  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};
export default BlogContextProvider;