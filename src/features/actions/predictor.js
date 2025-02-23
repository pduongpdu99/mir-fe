import { createAsyncThunk } from "@reduxjs/toolkit";
import { join } from "path-browserify";
import { fetchPrediction } from "../../helpers/actions/fetch";
import SYSTEM from "../../config/system";
import REDUCER_CONSTANT from "../../helpers/constants/reducers";

const name = REDUCER_CONSTANT.NAME.PREDICTOR;
const OptionNames = {
    SVM: join(name, 'svm'),
    RF: join(name, 'rf'),
    TN: join(name, 'tn'),
    TRN: join(name, 'trn'),
};

const opts = {
    body: {
        nn: SYSTEM.REQ_TEMP.nn
    },
    method: ['POST'],
    headers: {
        'Content-type': 'application/json'
    }
}

const [svm, rf, tn, trn, clear] = [
    createAsyncThunk(OptionNames.SVM, async (nn = undefined) =>
        fetchPrediction('svm', { ...opts, body: nn ? { nn } : opts.body })),
    createAsyncThunk(OptionNames.RF, async (nn = undefined) =>
        fetchPrediction('rf', { ...opts, body: nn ? { nn } : opts.body })),
    createAsyncThunk(OptionNames.TN, async (nn = undefined) =>
        fetchPrediction('tn', { ...opts, body: nn ? { nn } : opts.body })),
    createAsyncThunk(OptionNames.TRN, async (nn = undefined) =>
        fetchPrediction('trn', { ...opts, body: nn ? { nn } : opts.body })),
    createAsyncThunk(OptionNames.TRN, async () =>
        fetchPrediction('clear', null))
];

const general = {
    name, svm, tn, trn, rf, clear
};

export default general;