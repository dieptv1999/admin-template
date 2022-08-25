import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_FAILED,
  CREATE_CATEGORY_SUCCEED, GET_LIST_CATE, GET_LIST_CATE_SUCCESS,
} from "./action_types";

export default {
  createCategoryAction: (params, callback) => ({
    type: CREATE_CATEGORY,
    params,
    callback
  }),
  createCategorySucceedAction: (data) => ({
    type: CREATE_CATEGORY_SUCCEED,
    params: {
      data,
    },
  }),
  createCategoryFailedAction: (data) => ({
    type: CREATE_CATEGORY_FAILED,
    params: {
      data,
    },
  }),


  getListCateAction: (params, callback) => ({
    type: GET_LIST_CATE,
    params,
    callback
  }),
  getListCateSucceedAction: (data) => ({
    type: GET_LIST_CATE_SUCCESS,
    params: data,
  }),
};
