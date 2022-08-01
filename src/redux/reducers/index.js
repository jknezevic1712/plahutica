import blogReducer from "./blogs/blogReducer";
import utilsReducer from "./utils/utilsReducer";

const allReducers = {
  blogs: blogReducer,
  utils: utilsReducer,
};

export default allReducers;
