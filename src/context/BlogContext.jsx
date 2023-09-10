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
  const { state: authState, loginUser } = useContext(AuthContext);
  const { axiosWithKey, axiosPublic } = useAxios(authState);
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
    categories,
  } = state;
  useEffect(() => {
    // deleteCategories(6)
    // updateCategoriesWtihId(8,{
    //   "name": "string8"
    // })
    // getCategoriesWtihId(1)
    // createCategories({
    //   "name": "string"
    // })
    // getCategories()
    // deleteBlog(8)
    // loginUser({
    //   username: "pc117",
    //   email: "nm.ekinci@gmail.com",
    //   password: "654654Me.",
    // })
    // getBlogs()
    // getBlogWithId("1")
    // createBlog({
    //   "title": "1",
    //   "content": "1",
    //   "image": "https://st.depositphotos.com/1023102/1783/i/950/depositphotos_17839035-stock-photo-3d-word-first-on-white.jpg",
    //   "category": 1,
    //   "status": "d",
    //   "slug": ""
    // })
  }, []);
  useEffect(() => {
    if (authState.key) {
      // getBlogWithId("1")
      // updateBlog(11,{
      //   "title": "1",
      //   "content": "1",
      //   "image": "https://st.depositphotos.com/1023102/1783/i/950/depositphotos_17839035-stock-photo-3d-word-first-on-white.jpg",
      //   "category": 1,
      //   "status": "d",
      //   "slug": ""
      // })
    }
  }, [authState]);

  const getBlogs = async () => {
    dispatch({ type: "START" });

    try {
      const { data } = await axiosPublic.get(`${url}api/blogs/`);
      dispatch({ type: "SUCCESS", payload: data });
      // console.log(data);
    } catch (error) {
      dispatch({ type: "FAIL", payload: error });
      console.log(error);
    }
  };
  // console.log(state);
  const getcomments = async (id) => {
    dispatch({ type: "START" });

    try {
      const { data } = await axiosPublic.get(`${url}api/comments/${id}/`);
      dispatch({ type: "SUCCESS-COM", payload: data });
    } catch (error) {
      dispatch({ type: "FAIL", payload: error });
      console.log(error);
    }
  };
  const getlikes = async (id) => {
    dispatch({ type: "START" });

    try {
      const { data } = await axiosPublic.get(`${url}api/likes/${id}/`);
      dispatch({ type: "SUCCESS-COM", payload: data });
    } catch (error) {
      dispatch({ type: "FAIL", payload: error });
      console.log(error);
    }
  };
  const postComments = async (id) => {
    dispatch({ type: "START" });

    try {
      const { data } = await axiosPublic.post(`${url}api/comments/${id}/`);
      dispatch({ type: "SUCCESS-COM", payload: data });
    } catch (error) {
      dispatch({ type: "FAIL", payload: error });
      console.log(error);
    }
  };
  const postLikes = async (id) => {
    dispatch({ type: "START" });

    try {
      const { data } = await axiosPublic.post(`${url}api/likes/${id}/`);
      dispatch({ type: "SUCCESS-COM", payload: data });
    } catch (error) {
      dispatch({ type: "FAIL", payload: error });
      console.log(error);
    }
  };
  const getCategories = async () => {
    dispatch({ type: "START" });

    try {
      const { data } = await axiosPublic.get(`${url}api/categories/`);
      dispatch({ type: "SUCCESS-CAT", payload: data });
    } catch (error) {
      dispatch({ type: "FAIL", payload: error });
      console.log(error);
    }
  };
  const deleteCategories = async (id) => {
    dispatch({ type: "START" });

    try {
      const { data } = await axiosPublic.delete(`${url}api/categories/${id}/`);
      dispatch({ type: "SUCCESS-CAT", payload: "deleted" });
    } catch (error) {
      dispatch({ type: "FAIL", payload: error });
      console.log(error);
    }
  };
  const getCategoriesWtihId = async (id) => {
    dispatch({ type: "START" });

    try {
      const { data } = await axiosPublic.get(`${url}api/categories/${id}/`);
      dispatch({ type: "SUCCESS-CAT", payload: data });
    } catch (error) {
      dispatch({ type: "FAIL", payload: error });
      console.log(error);
    }
  };
  const updateCategoriesWtihId = async (id, cat) => {
    dispatch({ type: "START" });

    try {
      const { data } = await axiosPublic.put(`${url}api/categories/${id}/`, cat);
      dispatch({ type: "SUCCESS-CAT", payload: data });
    } catch (error) {
      dispatch({ type: "FAIL", payload: error });
      console.log(error);
    }
  };
  const createCategories = async (newCat) => {
    dispatch({ type: "START" });

    try {
      const { data } = await axiosPublic.post(`${url}api/categories/`, newCat);
      dispatch({ type: "SUCCESS-CAT", payload: data });
    } catch (error) {
      dispatch({ type: "FAIL", payload: error });
      console.log(error);
    }
  };
  const getBlogWithId = async (id) => {
    dispatch({ type: "START" });

    try {
      const { data } = await axiosWithKey(`api/blogs/${id}/`);
      dispatch({ type: "SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FAIL", payload: error });
      console.log(error);
    }
  };
  const createBlog = async (newBlog) => {
    dispatch({ type: "START" });
    // console.log(state);
    try {
      const { data } = await axiosWithKey.post(`api/blogs/`, newBlog);
      dispatch({ type: "SUCCESS", payload: data });
      // console.log(data);
      // console.log(state);
    } catch (error) {
      dispatch({ type: "FAIL", payload: error });
      console.log(error);
    }
  };
  const updateBlog = async (id, newBlog) => {
    dispatch({ type: "START" });
    // console.log(state);
    try {
      const { data } = await axiosWithKey.put(`api/blogs/${id}/`, newBlog);
      dispatch({ type: "SUCCESS", payload: data });
      // console.log(data);
      // console.log(state);
    } catch (error) {
      dispatch({ type: "FAIL", payload: error });
      console.log(error);
    }
  };
  const deleteBlog = async (id) => {
    dispatch({ type: "START" });
    // console.log(state);
    try {
      const { data } = await axiosWithKey.delete(`api/blogs/${id}/`);
      dispatch({ type: "SUCCESS", payload: data });
      // console.log(data);
      // console.log(state);
    } catch (error) {
      dispatch({ type: "FAIL", payload: error });
      console.log(error);
    }
  };

  // console.log(state);
  const values = {
    getBlogs,
    getBlogWithId,
    createBlog,
    updateBlog,
    deleteBlog,
    getCategories,
    createCategories,
    getCategoriesWtihId,
    updateCategoriesWtihId,
    deleteCategories,
    getcomments,
    getlikes,
    postComments,
    postLikes,
    state,
  };
  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};
export default BlogContextProvider;
