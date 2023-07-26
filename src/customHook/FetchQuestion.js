import { useEffect, useState } from 'react'
import Q from '../database/data.json'
import { useDispatch } from 'react-redux'
import * as Action from '../store/question_reducer'
import { useParams } from 'react-router-dom'


export const useFetchQuestion = () => {

    const { topic } = useParams();
    const [getData, setGetData] = useState({ isLoading: false, quesData: [], serverError: null })
    const dispatch = useDispatch();
    const data = Q[topic];

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));
        (async () => {
            try {
                let ques = await data;
                if (data.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }));
                    setGetData(prev => ({ ...prev, quesData: ques }));
                }
                else {
                    throw new Error("No question is available");
                }
                dispatch(Action.startExamAction(ques));
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false }));
                setGetData(prev => ({ ...prev, serverError: error }));
            }
        })()

        // eslint-disable-next-line
    }, [dispatch])
    return [getData, setGetData]
}

export const MoveNextQuestion = () => (dispatch) => {
    try {
        dispatch(Action.moveNext())
    } catch (error) {
        console.log(error);
    }
}

export const MovePrevQuestion = () => (dispatch) => {
    try {
        dispatch(Action.movePrev())
    } catch (error) {
        console.log(error);
    }
}

export const ResetQues = () => (dispatch) => {
    try {
        dispatch(Action.resetQuestion())
    } catch (error) {
        console.log(error);
    }
}
