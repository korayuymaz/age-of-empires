import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import unitSaga from "./unitSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(unitSaga);

export default store;
