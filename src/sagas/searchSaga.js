import { put } from "redux-saga/effects";
import { takeLatest } from "@redux-saga/core/effects";
import { SEARCH } from "../actions/search";
import performSearch from "../services/performSearch";

export function* querySaga(action) {
  console.log('inside querySaga', action.payload);
  yield put({
    type: SEARCH.UPDATE,
    payload: action.payload
  });
  const response = yield performSearch(action.payload);
  yield put({
    type: SEARCH.SUCCESS,
    payload: response.data,
  });
};

export default function* watchQuerySaga() {
  yield takeLatest(SEARCH.BEGIN, querySaga);
}