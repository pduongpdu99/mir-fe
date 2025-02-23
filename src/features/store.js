import { configureStore } from "@reduxjs/toolkit";
import predictReducer from './reducers/predictor';
import REDUCER_CONSTANT from "../helpers/constants/reducers";

const store = configureStore({
    reducer: {
        [REDUCER_CONSTANT.NAME.PREDICTOR]: predictReducer
    }
});


export default store;