import { legacy_createStore as createStore } from "redux";
import { reducer } from "./todo/reducer";

export const store = createStore(reducer);
