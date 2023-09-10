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

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialBlogState);
  const url = process.env.REACT_APP_BASE_URL;

  const values = {};
  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};

export default BlogContextProvider;
