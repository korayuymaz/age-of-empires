import { SET_UNIT_LIST, SET_UNIT_DETAIL, SET_FILTERED_UNIT_LIST } from "./actionTypes";

export const unitData = (data = [], action) => {
  switch (action.type) {
    case SET_UNIT_LIST:
      console.warn("UNITS_LIST condition ", action);
      return [...action.data];
    case SET_FILTERED_UNIT_LIST:
      console.warn("UNITS_LIST condition ", action);
      return [...action.filteredData];
    case SET_UNIT_DETAIL:
      console.warn("UNIT_DETAIL condition ", action);
      console.warn("found unit", action.foundUnit)
      return [action.foundUnit];
    default:
      return data;
  }
};
