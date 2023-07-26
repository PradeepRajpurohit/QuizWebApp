import * as Action from '../store/result_reducer'

export const PushResult = (result) => (dispatch)=>{
    try {
        dispatch(Action.pushResult(result))
    } catch (error) {
        console.log(error);
    }

}

export const ResetRes = () => (dispatch)=>{
    try {
        dispatch(Action.resetResult())
    } catch (error) {
        console.log(error);
    }

}

export const UpdateRes = (value) => async(dispatch)=>{
    try {
        dispatch(Action.updateResult(value))
    } catch (error) {
        console.log(error);
    }
}