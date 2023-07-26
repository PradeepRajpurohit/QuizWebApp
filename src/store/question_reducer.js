import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
    name: 'questions',
    initialState: {
        queue: [],
        answers: [],
        trace: 0
    },
    reducers: {
        startExamAction: (state, action) => {
            return {
                ...state,
                queue: action.payload
            }
        },
        moveNext: (state, action) => {
            return {
                ...state,
                trace: state.trace + 1
            }
        },
        movePrev: (state, action) => {
            return {
                ...state,
                trace: state.trace - 1
            }
        },
        resetQuestion: () => {
            return {
                queue: [],
                answers: [],
                trace: 0
            }
        }
    }
})

export const { startExamAction, moveNext, movePrev, resetQuestion } = questionReducer.actions;

export default questionReducer.reducer;