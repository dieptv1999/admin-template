const defaultParams = {
  categories: [],
};

export default (state = defaultParams, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};
