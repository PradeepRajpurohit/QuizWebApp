import React, { useState, useEffect } from 'react'
import Question from './Question'
import { useDispatch, useSelector } from 'react-redux'
import { MoveNextQuestion, MovePrevQuestion } from '../customHook/FetchQuestion';
import { PushResult } from '../customHook/setResult';
import { useNavigate, useParams } from 'react-router-dom';

const Quiz = () => {

  const dispatch = useDispatch();
  const { queue, trace } = useSelector(state => state.questions);
  const result = useSelector(state => state.result.result);
  const [check, setCheck] = useState();
  const navigate = useNavigate()
  const {topic} = useParams()

  const checked = (i) => {
    setCheck(i);
  }

  const next = () => {
    if (trace < 10) {
      dispatch(MoveNextQuestion())
      if (trace >= result.length) {
        dispatch(PushResult(check))
      }
      setCheck()
    }
  }

  const prev = () => {
    if (trace > 0) {
      dispatch(MovePrevQuestion())
    }
  }

  const userId = useSelector(state => state.result.userId);
  const UserAuth = () => {
    if (!userId) {
      navigate('/');
    }

  }

  useEffect(() => {
    UserAuth();
    if (result.length && result.length >= queue.length) {
      navigate('/result');
    }
  })

  return (
    <section className='bg-[#3D2B55] h-screen md:px-32 px-8'>
      <div className='text-white relative h-full'>
        <h1 className='text-2xl md:text-4xl flex items-center justify-center  font-semibold h-1/5' >{topic.toUpperCase()} QUIZ</h1>
        <div className='overflow-y-hidden h-3/5 md:px-4'>
          < Question checked={checked} />
        </div>
        <div className='flex justify-between py-6 h-1/5'>
          {trace>0?<button onClick={prev} type="button" className="text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l  font-medium rounded-lg md:text-lg md:px-8 px-4 py-2 md:mt-6 mt-3 focus:outline-none ">Prev</button>:<div></div>}
          {trace<9?<button onClick={next} type="button" className="text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l  font-medium rounded-lg md:text-lg md:px-8 px-4 py-2 md:mt-6 mt-3 focus:outline-none ">Next</button>:<button onClick={next} type="button" className="text-white bg-green-700 hover:bg-gradient-to-l  font-medium rounded-lg md:text-lg md:px-8 px-4 py-2 md:mt-6 mt-3 focus:outline-none ">Submit</button>}
        </div>
      </div>
    </section>
  )
}

export default Quiz
