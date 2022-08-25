import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_FAILED,
  CREATE_CATEGORY_SUCCEED
} from './action_types';

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
};
