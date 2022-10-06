import { getUnits } from "../unitSaga";
import { runSaga } from "redux-saga";
import data from "../../data/age-of-empires-units.json";

test("Saga gives back all the unit data", async () => {
  // dispatched actions
  const dispatchedActions = [];

  const fakeStore = {
    getState: () => ({ data: [] }),
    dispatch: (action) => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, getUnits).done;

  expect(dispatchedActions[0].type).toBe("SET_UNIT_LIST");
  expect(dispatchedActions[0].data).toBe(data.units);
});
