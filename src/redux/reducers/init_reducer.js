export default (
  state = {
    notification: {},
    showNotification: 0,
  }, action,
) => {
  switch (action.type) {
    case '@@__INIT__SUCCEED': {
      return {
        ...state,
      };
    }

    case '@@NOTIFICATION': {
      return {
        ...state,
        notification: action.data,
        showNotification: state.showNotification + 1,
      }
    }

    case '@@CLOSE_NOTIFICATION': {
      return {
        ...state,
        showNotification: false,
        notification: {},
      }
    }

    default:
      return {
        ...state,
      };
  }
};
