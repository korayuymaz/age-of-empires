import { takeEvery, put} from "redux-saga/effects";
import { SET_UNIT_LIST, UNITS_LIST, SET_UNIT_DETAIL, UNIT_DETAIL } from "./actionTypes";
import unitData from "../data/age-of-empires-units.json";

function* getUnits() {
  let data = yield unitData.units;
  yield put({ type: SET_UNIT_LIST, data });
}

function* getUnitDetails(id) {
  let data = yield unitData.units
  for (let unit in data) {
    if (parseInt(data[unit].id) === parseInt(id.data)) {
      var foundUnit = yield data[unit];
      break;
    }
  }
  console.log("SAGA FOUND UNIT", foundUnit)
  yield put({type: SET_UNIT_DETAIL, foundUnit})
}

// function* searchUnits(data) {
//   let data = yield unitData.units;
//   console.warn("action is called", data);
//   yield put({ type: SET_ALL_UNITS, data: result });
// }

function* unitSaga() {
  yield takeEvery(UNITS_LIST, getUnits);
  yield takeEvery(UNIT_DETAIL, getUnitDetails);
}

export default unitSaga;
