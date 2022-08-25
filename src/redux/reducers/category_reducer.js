import { GET_LIST_CATE_SUCCESS } from "../actions/category/action_types";

const defaultParams = {
  categories: [],
};

export default (state = defaultParams, action) => {
  switch (action.type) {
    case GET_LIST_CATE_SUCCESS: {
      state.categories = action.params?.data[0];
      return state;
    }
    default:
      return {
        ...state,
      };
  }
};
