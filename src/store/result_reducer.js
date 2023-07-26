import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
    name: 'result',
    initialState: {
        userId: null,
        result: []
    },
    reducers: {
        setuserId: (state, action) => {
            return {
                ...state,
                userId: action.payload
            }
        },
        pushResult: (state, action) => {
            state.result.push(action.payload)
        },
        updateResult: (state,action) => {
            const {trace, check} = action.payload;
            state.result.fill(check, trace, trace+1);
        },
        resetResult: () => {
            return {
                userId: null,
                result: []
            }
        }
    }
})

export const { setuserId, pushResult, resetResult,updateResult } = resultReducer.actions;

export default resultReducer.reducer;