import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";


function useNotification() {
  const dispatch = useDispatch();
  const { showNotification, notification } = useSelector(state => state.common);
  const showNotificationAction = useCallback((message, type = "success") => {
    dispatch({
      type: "@@NOTIFICATION",
      data: {
        message,
        type,
      },
    });
  }, [dispatch]);

  const closeNotification = useCallback(() => {
    dispatch({
      type: "@@CLOSE_NOTIFICATION",
    });
  }, [dispatch]);

  return useMemo(() => ({
    showNotificationAction,
    showNotification,
    notification,
    closeNotification,
  }), [showNotificationAction, showNotification, notification, closeNotification]);
}

export default useNotification;