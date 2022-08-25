import { combineReducers } from 'redux';
import user from './user_reducer';
import wallet from "./wallet_reducer";
import category from "./category_reducer";
import post from "./post_reducer";
import common from './init_reducer';

const allReducers = combineReducers({
  user,
  wallet,
  category,
  post,
  common,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state.user = undefined;
  }

  return allReducers(state, action);
};

export default rootReducer;
