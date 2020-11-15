import { all } from 'redux-saga/effects';

function* actionWatcher() {}

export default function* globalSaga() {
  yield all([actionWatcher()]);
}
