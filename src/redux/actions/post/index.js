import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_FAILED,
  CREATE_CATEGORY_SUCCEED
} from './action_types';

export default {
  createCategoryAction: (data) => ({
    type: CREATE_CATEGORY,
    params: {
      data,
    },
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
