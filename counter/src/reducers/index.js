import changeTheNumber from "./counter";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        changeTheNumber
    }
);

export default reducers;