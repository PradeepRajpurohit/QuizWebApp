import { combineReducers, configureStore } from "@reduxjs/toolkit";

import  questionReducer  from './question_reducer.js';
import resultReducer  from './result_reducer.js';

const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer
})

export default configureStore({ reducer : rootReducer })