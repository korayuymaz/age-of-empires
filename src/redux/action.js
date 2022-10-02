import { UNITS_LIST, UNIT_DETAIL } from "./actionTypes"

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