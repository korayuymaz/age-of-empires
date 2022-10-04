import { SET_UNIT_LIST, SET_UNIT_DETAIL, SET_FILTERED_UNIT_LIST } from "./actionTypes";

export const unitData = (data = [], action) => {
  switch (action.type) {
    case SET_UNIT_LIST:
      return [...action.data];
    case SET_FILTERED_UNIT_LIST:
      return [...action.filteredData];
    case SET_UNIT_DETAIL:
      return [action.foundUnit];
    default:
      return data;
  }
};
