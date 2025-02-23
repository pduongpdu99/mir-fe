export const failHandling = (state, action) => {
    state.response = undefined;
    state.state = 400;
    state.message = "Failed prediction";
}


export const successHandling = (state, action) => {
    state.response = action.payload.predict;
    state.nn = action.meta.arg ?? [];
    state.state = 200;
    state.message = "Success prediction";
}
