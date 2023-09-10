export const initialBlogState = {
  loading: false,
  id: "",
  title: "",
  content: "",
  image: "",
  category: "",
  publish_date: "",
  author: "",
  status: "",
  slug: "",
  comments: [],
  category_name: "",
  likes: 0,
  post_views: 0,
  comment_count: 0,
  likes_n: [],
  error: "",
};
export const reducer = (initialBlogState, action) => {
    switch (action.type) {
        case "START":
            return {...initialBlogState, loading: true}
        case "SUCCESS":
            return {...initialBlogState, loading: false}
        case "FAIL":
            return {...initialBlogState, loading: false}
    
        default:
            break;
    }
}
