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
  console.log("Filters Data", filters.data);
  let data = yield unitData.units;
  let filteredData = yield [];
  // some calculations
  if (filters.data.age !== "All") {
    for (let unit in data) {
      if (data[unit].age === filters.data.age) {
        for (let cost in filters.data.filters) {
          if (data[unit].cost) {
            if (data[unit].cost.Wood) {
              if (
                !(
                  data[unit].cost.Wood >=
                    filters.data.filters.woodCostValue[0] &&
                  data[unit].cost.Wood <= filters.data.filters.woodCostValue[1]
                )
              ) {
                break;
              }
            }
            if(data[unit].cost.Food){
              if (
                !(
                  data[unit].cost.Food >= filters.data.filters.foodCostValue[0] &&
                  data[unit].cost.Food <= filters.data.filters.foodCostValue[1]
                )
              ) {
                break;
              }
            }
            if(data[unit].cost.Gold){
              if (
                !(
                  data[unit].cost.Gold >= filters.data.filters.goldCostValue[0] &&
                  data[unit].cost.Gold <= filters.data.filters.goldCostValue[1]
                )
              ) {
                break;
              }
            }
            filteredData.push(data[unit]);
          }
        }
      }
    }
    // console.log(filters.data.filters)
    yield put({ type: SET_FILTERED_UNIT_LIST, filteredData });
  } else {
    filteredData = yield unitData.units;
    yield put({ type: SET_FILTERED_UNIT_LIST, filteredData });
  }
}

function* unitSaga() {
  yield takeEvery(UNITS_LIST, getUnits);
  yield takeEvery(UNIT_DETAIL, getUnitDetails);
  yield takeEvery(FILTERED_UNIT_LIST, getFilteredUnits);
}

export default unitSaga;
