import React, { useState,useEffect } from 'react'
// import data from '../database/data.json'

// Custom hook
import { useFetchQuestion } from '../customHook/FetchQuestion'
import { UpdateRes } from '../customHook/setResult';
import { useDispatch, useSelector } from 'react-redux';

const Question=({ checked })=> {

  const [check,setCheck] = useState();
  const [id,setId] = useState();
  const dispatch = useDispatch();
  const [{isLoading,serverError}] = useFetchQuestion();
  const trace = useSelector(state => state.questions.trace)
  const result = useSelector(state => state.result.result)
  const question = useSelector(state => state.questions.queue[trace]);

  useEffect(()=>{
    dispatch(UpdateRes({ trace,check }))
    // eslint-disable-next-line
  },[check])

  const Select = (i,id) =>{
    setCheck(i);
    checked(i);
    setId(id);
  }


  if(isLoading) return <div className='flex justify-center'><img className='w-48' src='https://www.wpfaster.org/wp-content/uploads/2013/06/loading-gif.gif' alt=''/></div>
  if(serverError) return <h3>{serverError} || unknown error</h3>

  return (
    <div className='text-white md:text-2xl text-lg'>
      <p className='font-medium mb-4'><span className='mr-2'>{question?.id}.</span>{question?.question}</p>
      <ul className='mx-2 space-y-1 cursor-pointer'>
        {question?.options.map((q,i) => {

                return  <li key={i}><input className='mr-2' type='radio' name='option' id={`q${i}-option`} value={true} checked={i===result[trace]?true:false || (question.id===id && i===check)} onChange={()=>Select(i,question.id)}/>
                  <label className='text-white' htmlFor={`q${i}-option`}>{q}</label>
                  </li>
        })}
      </ul>
    </div>
  )
}

export default Question
