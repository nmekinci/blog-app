// getBlogs = get http://30117.fullstack.clarusway.com/  api/blogs/

// createBlogs = post http://30117.fullstack.clarusway.com/    api/blogs/, {
//   "title": "string",
//   "content": "string",
//   "image": "string",
//   "category": 0,
//   "status": "d",
//   "slug": "string"
// }

import React, { createContext, useReducer } from "react";
import { initialBlogState, reducer } from "../reducer/blogReducer";
import axios from "axios";


export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialBlogState);
  const url = process.env.REACT_APP_BASE_URL;
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
  } = state

  const getBlogs = async () => {
    dispatch({type: "START"})
    try {
        const {data} = await axios(`${url}api/blogs/`)
        dispatch({type:"SUCCESS"})
    } catch (error) {
        dispatch({type:"FAIL",payload: error})
        console.log(error);
    }
  }

  const values = {getBlogs};
  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};

export default BlogContextProvider;
