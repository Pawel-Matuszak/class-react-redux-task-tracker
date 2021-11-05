import { combineReducers, createStore } from "redux";
import items from "./reducers/items"

const reducers = combineReducers({
  items: items
});

const store = createStore(reducers);

export default store;