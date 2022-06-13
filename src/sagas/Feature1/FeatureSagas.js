import { call, put } from "redux-saga/effects";
import API from "./FeatureApis";
import { takeLatest } from "redux-saga/effects";
import * as TYPES from "./FeatureTypes";
import { featureFetchRejected, getFeatureData } from "./FeatureSlice";

// Replace with your sagas
export function* sagasRequestExample() {
  try {
    const response = yield call(API.apiExampleRequest);
    console.log(response);
    yield put(getFeatureData(response));
  } catch (err) {
    yield put(featureFetchRejected(err));
  }
}


export function* FeatureSaga1() {
  yield takeLatest(TYPES.GET_DATA_REQUEST, sagasRequestExample);
}
