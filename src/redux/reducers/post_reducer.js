const defaultParams = {
  posts: [],
};

export default (state = defaultParams, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};
