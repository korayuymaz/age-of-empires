import { UNITS_LIST, UNIT_DETAIL, FILTERED_UNIT_LIST } from "./actionTypes"

export const unitList = () => {
    return {
        type: UNITS_LIST,
    }
}

export const unitDetail = (id) => {
    return {
        type: UNIT_DETAIL,
        data: id
    }
}

export const unitFilteredList = (filters) => {
    return {
        type: FILTERED_UNIT_LIST,
        data: filters
    }
}
