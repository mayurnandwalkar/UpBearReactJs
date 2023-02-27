import api from "./api";

const getBlogs = (id) => {
  return api.post("/blogs",id);
};


const BlogService = {
  getBlogs,
};

export default BlogService;