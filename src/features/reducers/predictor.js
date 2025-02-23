import { createSlice } from "@reduxjs/toolkit";
import PredictorAction from '../actions/predictor';
import { failHandling, successHandling } from "../../helpers/actions/handling";


const state = { nn: [], response: null, state: 200, message: undefined };

const PredictReducer = createSlice({
    name: PredictorAction.name,
    initialState: state,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(PredictorAction.svm.rejected, failHandling)
            .addCase(PredictorAction.rf.rejected, failHandling)
            .addCase(PredictorAction.tn.rejected, failHandling)
            .addCase(PredictorAction.trn.rejected, failHandling)

            .addCase(PredictorAction.svm.fulfilled, successHandling)
            .addCase(PredictorAction.rf.fulfilled, successHandling)
            .addCase(PredictorAction.tn.fulfilled, successHandling)
            .addCase(PredictorAction.trn.fulfilled, successHandling)
    }
})

export default PredictReducer.reducer;