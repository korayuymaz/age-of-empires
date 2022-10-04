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
  console.log(filters.data.sliderActive)
  // some calculations
  if (filters.data.age !== "All") {
    for (let unit in data) {
      if (data[unit].age === filters.data.age) {
        if (filters.data.sliderActive.wood) {
          let lowerCost = parseInt(filters.data.filters.woodCostValue[0]);
          let upperCost = parseInt(filters.data.filters.woodCostValue[1]);
          if (data[unit].cost) {
            console.log("This is where its suppose to enter")
            if (data[unit].cost.Wood) {
              if (
                lowerCost <= data[unit].cost.Wood &&
                upperCost >= data[unit].cost.Wood
              ) {
                filteredData.push(data[unit]);
              }
            }
          } else {
            filteredData.push(data[unit]);
          }
        } else {
          filteredData.push(data[unit]);
        }
      }
    }
  } else {
    filteredData = data;
  }
  yield put({ type: SET_FILTERED_UNIT_LIST, filteredData });
}

function* unitSaga() {
  yield takeEvery(UNITS_LIST, getUnits);
  yield takeEvery(UNIT_DETAIL, getUnitDetails);
  yield takeEvery(FILTERED_UNIT_LIST, getFilteredUnits);
}

export default unitSaga;
