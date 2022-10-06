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

// This generator function gets all the units in given data
export function* getUnits() {
  let data = yield unitData.units;
  yield put({ type: SET_UNIT_LIST, data });
}

// This generator function gets a specific unit with given id
export function* getUnitDetails(id) {
  console.log("see if this works", id)
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

// This generator function gets filtered data
export function* getFilteredUnits(filters) {
  let data = yield unitData.units;
  let filteredData = yield [];
  let lowerCostGold = parseInt(filters.data.filters.goldCostValue[0]);
  let upperCostGold = parseInt(filters.data.filters.goldCostValue[1]);
  let lowerCostFood = parseInt(filters.data.filters.foodCostValue[0]);
  let upperCostFood = parseInt(filters.data.filters.foodCostValue[1]);
  let lowerCostWood = parseInt(filters.data.filters.woodCostValue[0]);
  let upperCostWood = parseInt(filters.data.filters.woodCostValue[1]);

  // Filter calculations
  if (filters.data.age !== "All") {
    for (let unit in data) {
      // Check if unit has the age requirement as the age selected from filter
      if (data[unit].age === filters.data.age) {
        // If only the Wood Cost filter is active
        if (
          filters.data.sliderActive.wood &&
          !filters.data.sliderActive.food &&
          !filters.data.sliderActive.gold
        ) {
          if (data[unit].cost) {
            console.log("This is where its suppose to enter");
            if (data[unit].cost.Wood) {
              if (
                lowerCostWood <= data[unit].cost.Wood &&
                upperCostWood >= data[unit].cost.Wood
              ) {
                filteredData.push(data[unit]);
              }
            }
          }
          // If only food cost filter active
        } else if (
          !filters.data.sliderActive.wood &&
          filters.data.sliderActive.food &&
          !filters.data.sliderActive.gold
        ) {
          if (data[unit].cost) {
            console.log("This is where its suppose to enter");
            if (data[unit].cost.Food) {
              if (
                lowerCostFood <= data[unit].cost.Food &&
                upperCostFood >= data[unit].cost.Food
              ) {
                filteredData.push(data[unit]);
              }
            }
          }
          // If only gold cost filter active
        } else if (
          !filters.data.sliderActive.wood &&
          !filters.data.sliderActive.food &&
          filters.data.sliderActive.gold
        ) {
          if (data[unit].cost) {
            console.log("This is where its suppose to enter");
            if (data[unit].cost.Gold) {
              if (
                lowerCostGold <= data[unit].cost.Gold &&
                upperCostGold >= data[unit].cost.Gold
              ) {
                filteredData.push(data[unit]);
              }
            }
          }
          // If Wood and Food filter is active
        } else if (
          filters.data.sliderActive.wood &&
          filters.data.sliderActive.food &&
          !filters.data.sliderActive.gold
        ) {
          if (data[unit].cost) {
            console.log("This is where its suppose to enter");
            if (data[unit].cost.Food && data[unit].cost.Wood) {
              if (
                lowerCostFood <= data[unit].cost.Food &&
                upperCostFood >= data[unit].cost.Food &&
                lowerCostWood <= data[unit].cost.Wood &&
                upperCostWood >= data[unit].cost.Wood
              ) {
                filteredData.push(data[unit]);
              }
            }
          }
          // If Wood and Gold filter is active
        } else if (
          filters.data.sliderActive.wood &&
          !filters.data.sliderActive.food &&
          filters.data.sliderActive.gold
        ) {
          if (data[unit].cost) {
            console.log("This is where its suppose to enter");
            if (data[unit].cost.Gold && data[unit].cost.Wood) {
              if (
                lowerCostGold <= data[unit].cost.Gold &&
                upperCostGold >= data[unit].cost.Gold &&
                lowerCostWood <= data[unit].cost.Wood &&
                upperCostWood >= data[unit].cost.Wood
              ) {
                filteredData.push(data[unit]);
              }
            }
          }
          // If Food and Gold filters active
        } else if (
          !filters.data.sliderActive.wood &&
          filters.data.sliderActive.food &&
          filters.data.sliderActive.gold
        ) {
          if (data[unit].cost) {
            console.log("This is where its suppose to enter");
            if (data[unit].cost.Gold && data[unit].cost.Food) {
              if (
                lowerCostGold <= data[unit].cost.Gold &&
                upperCostGold >= data[unit].cost.Gold &&
                lowerCostFood <= data[unit].cost.Food &&
                upperCostFood >= data[unit].cost.Food
              ) {
                filteredData.push(data[unit]);
              }
            }
          }
          // If all filters active
        } else if (
          filters.data.sliderActive.wood &&
          filters.data.sliderActive.food &&
          filters.data.sliderActive.gold
        ) {
          if (data[unit].cost) {
            console.log("This is where its suppose to enter");
            if (
              data[unit].cost.Gold &&
              data[unit].cost.Food &&
              data[unit].cost.Wood
            ) {
              if (
                lowerCostGold <= data[unit].cost.Gold &&
                upperCostGold >= data[unit].cost.Gold &&
                lowerCostFood <= data[unit].cost.Food &&
                upperCostFood >= data[unit].cost.Food &&
                lowerCostWood <= data[unit].cost.Wood &&
                upperCostWood >= data[unit].cost.Wood
              ) {
                filteredData.push(data[unit]);
              }
            }
          }
        } else {
          filteredData.push(data[unit]);
        }
      }
    }
  } else {
    // If age filter is not active or equal to All
    for (let unit in data) {
      if (
        filters.data.sliderActive.wood &&
        !filters.data.sliderActive.food &&
        !filters.data.sliderActive.gold
      ) {
        if (data[unit].cost) {
          console.log("This is where its suppose to enter");
          if (data[unit].cost.Wood) {
            if (
              lowerCostWood <= data[unit].cost.Wood &&
              upperCostWood >= data[unit].cost.Wood
            ) {
              filteredData.push(data[unit]);
            }
          }
        }
        // If only food cost filter active
      } else if (
        !filters.data.sliderActive.wood &&
        filters.data.sliderActive.food &&
        !filters.data.sliderActive.gold
      ) {
        if (data[unit].cost) {
          console.log("This is where its suppose to enter");
          if (data[unit].cost.Food) {
            if (
              lowerCostFood <= data[unit].cost.Food &&
              upperCostFood >= data[unit].cost.Food
            ) {
              filteredData.push(data[unit]);
            }
          }
        }
        // If only gold cost filter active
      } else if (
        !filters.data.sliderActive.wood &&
        !filters.data.sliderActive.food &&
        filters.data.sliderActive.gold
      ) {
        if (data[unit].cost) {
          console.log("This is where its suppose to enter");
          if (data[unit].cost.Gold) {
            if (
              lowerCostGold <= data[unit].cost.Gold &&
              upperCostGold >= data[unit].cost.Gold
            ) {
              filteredData.push(data[unit]);
            }
          }
        }
        // If Wood and Food filter is active
      } else if (
        filters.data.sliderActive.wood &&
        filters.data.sliderActive.food &&
        !filters.data.sliderActive.gold
      ) {
        if (data[unit].cost) {
          console.log("This is where its suppose to enter");
          if (data[unit].cost.Food && data[unit].cost.Wood) {
            if (
              lowerCostFood <= data[unit].cost.Food &&
              upperCostFood >= data[unit].cost.Food &&
              lowerCostWood <= data[unit].cost.Wood &&
              upperCostWood >= data[unit].cost.Wood
            ) {
              filteredData.push(data[unit]);
            }
          }
        }
        // If Wood and Gold filter is active
      } else if (
        filters.data.sliderActive.wood &&
        !filters.data.sliderActive.food &&
        filters.data.sliderActive.gold
      ) {
        if (data[unit].cost) {
          console.log("This is where its suppose to enter");
          if (data[unit].cost.Gold && data[unit].cost.Wood) {
            if (
              lowerCostGold <= data[unit].cost.Gold &&
              upperCostGold >= data[unit].cost.Gold &&
              lowerCostWood <= data[unit].cost.Wood &&
              upperCostWood >= data[unit].cost.Wood
            ) {
              filteredData.push(data[unit]);
            }
          }
        }
        // If Food and Gold filters active
      } else if (
        !filters.data.sliderActive.wood &&
        filters.data.sliderActive.food &&
        filters.data.sliderActive.gold
      ) {
        if (data[unit].cost) {
          console.log("This is where its suppose to enter");
          if (data[unit].cost.Gold && data[unit].cost.Food) {
            if (
              lowerCostGold <= data[unit].cost.Gold &&
              upperCostGold >= data[unit].cost.Gold &&
              lowerCostFood <= data[unit].cost.Food &&
              upperCostFood >= data[unit].cost.Food
            ) {
              filteredData.push(data[unit]);
            }
          }
        }
        // If all filters active
      } else if (
        filters.data.sliderActive.wood &&
        filters.data.sliderActive.food &&
        filters.data.sliderActive.gold
      ) {
        if (data[unit].cost) {
          console.log("This is where its suppose to enter");
          if (
            data[unit].cost.Gold &&
            data[unit].cost.Food &&
            data[unit].cost.Wood
          ) {
            if (
              lowerCostGold <= data[unit].cost.Gold &&
              upperCostGold >= data[unit].cost.Gold &&
              lowerCostFood <= data[unit].cost.Food &&
              upperCostFood >= data[unit].cost.Food &&
              lowerCostWood <= data[unit].cost.Wood &&
              upperCostWood >= data[unit].cost.Wood
            ) {
              filteredData.push(data[unit]);
            }
          }
        }
      } else {
        filteredData.push(data[unit]);
      }
    }
  }
  yield put({ type: SET_FILTERED_UNIT_LIST, filteredData });
}

function* unitSaga() {
  yield takeEvery(UNITS_LIST, getUnits);
  yield takeEvery(UNIT_DETAIL, getUnitDetails);
  yield takeEvery(FILTERED_UNIT_LIST, getFilteredUnits);
}

export default unitSaga;
