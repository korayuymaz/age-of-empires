import { takeEvery, put } from "redux-saga/effects";
import {
  SET_UNIT_LIST,
  UNITS_LIST,
  SET_UNIT_DETAIL,
  UNIT_DETAIL,
  SET_FILTERED_UNIT_LIST,
  FILTERED_UNIT_LIST,
} from "./actionTypes";
import unitData from "../data/age-of-empires-units.json";

function* getUnits() {
  let data = yield unitData.units;
  yield put({ type: SET_UNIT_LIST, data });
}

function* getUnitDetails(id) {
  let data = yield unitData.units;
  for (let unit in data) {
    if (parseInt(data[unit].id) === parseInt(id.data)) {
      var foundUnit = yield data[unit];
      break;
    }
  }
  console.log("SAGA FOUND UNIT", foundUnit);
  yield put({ type: SET_UNIT_DETAIL, foundUnit });
}

function* getFilteredUnits(filters) {
  let data = yield unitData.units;
  let filteredData = yield [];
  // some calculations
  if (filters.data !== "All") {
    for (let unit in data) {
      if (data[unit].age === filters.data) {
        filteredData.push(data[unit]);
      }
    }
    console.log(filters.data);
    yield put({ type: SET_FILTERED_UNIT_LIST, filteredData });
  } else {
    console.log("Entered else part ",filters.data)
    filteredData = yield unitData.units;
    yield put({ type: SET_FILTERED_UNIT_LIST, filteredData });
  }
}

// function* searchUnits(data) {
//   let data = yield unitData.units;
//   console.warn("action is called", data);
//   yield put({ type: SET_ALL_UNITS, data: result });
// }

function* unitSaga() {
  yield takeEvery(UNITS_LIST, getUnits);
  yield takeEvery(UNIT_DETAIL, getUnitDetails);
  yield takeEvery(FILTERED_UNIT_LIST, getFilteredUnits);
}

export default unitSaga;
