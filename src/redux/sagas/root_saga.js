import { all } from 'redux-saga/effects';
import watchAllUsers from './user_saga';
import watchInit from './init_saga';
import watchAllCategory from './category_saga';
import watchAllPost from './post_saga';

export default function* rootSaga() {
  yield all([
    watchAllCategory(),
    watchAllUsers(),
    watchInit(),
    watchAllPost(),
  ]);
}
