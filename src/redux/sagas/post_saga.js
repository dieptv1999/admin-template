import {
  put, takeLatest, call, all, fork,
} from 'redux-saga/effects';
import rf from '../../requests/RequestFactory';
import {isFunction} from "lodash";
import actions from "../actions/category";
import { CREATE_CATEGORY } from "../actions/category/action_types";

function* create(action) {
  try {
    const resp = yield call((params) => rf.getRequest('PostRequest').create(params), action.params);
    yield put(actions.createCategorySucceedAction(resp));
    if (isFunction(action.callback)) action.callback();
  } catch (err) {
    console.error(err);
    console.log(err.message, '@: err.message');
  }
}

function* watchAllPost() {
  yield takeLatest(CREATE_CATEGORY, create);
}

export default function* rootSaga() {
  yield all([fork(watchAllPost)]);
}
