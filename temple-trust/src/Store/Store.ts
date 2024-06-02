import { combineReducers, legacy_createStore } from "redux";
import worshipReducer from "./reducers/worship";

const appReducer = combineReducers({
    worship: worshipReducer,
})

const Store = legacy_createStore(appReducer);

export default Store;