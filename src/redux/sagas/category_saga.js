import {
  put, takeLatest, call, all, fork,
} from 'redux-saga/effects';
import rf from '../../requests/RequestFactory';
import {isFunction} from "lodash";
import actions from "../actions/category";
import { CREATE_CATEGORY, GET_LIST_CATE } from "../actions/category/action_types";

function* create(action) {
  try {
    const resp = yield call((params) => rf.getRequest('CategoryRequest').create(params), action.params);
    yield put(actions.createCategorySucceedAction(resp));
    if (isFunction(action.callback)) action.callback();
  } catch (err) {
    console.error(err);
    console.log(err.message, '@: err.message');
  }
}

function* list(action) {
  try {
    const resp = yield call((params) => rf.getRequest('CategoryRequest').list(params), action.params);
    yield put(actions.getListCateSucceedAction(resp));
    if (isFunction(action.callback)) action.callback();
  } catch (err) {
    console.error(err);
    console.log(err.message, '@: err.message');
  }
}

function* watchAllCategory() {
  yield takeLatest(CREATE_CATEGORY, create);
  yield takeLatest(GET_LIST_CATE, list);
}

export default function* rootSaga() {
  yield all([fork(watchAllCategory)]);
}
