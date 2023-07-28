import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ResetQues } from '../customHook/FetchQuestion'
import { ResetRes } from '../customHook/setResult'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Result = () => {

  const dispatch = useDispatch();
  const [points,setPoints] = useState()
  const [attemps,setAttempts] = useState()
  const userId = useSelector(state => state.result.userId)
  const result = useSelector(state => state.result.result)
  const queue = useSelector(state => state.questions.queue)

  const navigate = useNavigate();
  const UserAuth = () => {
    if (!userId) {
      navigate('/');
    }

  }

  useEffect(() => {

    UserAuth()

    let marks = 0;
    let attend = 0;

    for (let i = 0; i < queue.length; i++) {
      if (queue[i].answer === result[i]) {
        marks++;
      }
      if (result[i] !== undefined) {
        attend++;
      }
    }
    setPoints(marks);
    setAttempts(attend);
    // eslint-disable-next-line
  }, [])


  const handleHome = () => {
    dispatch(ResetQues());
    dispatch(ResetRes());
  }

  return (
    <section className='bg-[#3D2B55] md:px-32 px-8'>
      <div className='h-screen flex flex-col justify-center text-white space-y-8'>
        <h1 className='text-center text-3xl md:text-4xl font-bold'>Result</h1>
        <div className='text-base md:text-lg font-medium space-y-3 border-4 border-pink-700 rounded p-2'>
          <div className='flex justify-between'>
            <p>User Name:</p>
            <p>{userId}</p>
          </div>
          <div className='flex justify-between'>
            <p>Maximum Point:</p>
            <p>100</p>
          </div>
          <div className='flex justify-between'>
            <p>Total Question:</p>
            <p>10</p>
          </div>
          <div className='flex justify-between'>
            <p>Question Attemped:</p>
            <p>{attemps}</p>
          </div>
          <div className='flex justify-between'>
            <p>Your Score:</p>
            <p>{points}</p>
          </div>
          <div className='flex justify-between'>
            <p>Result:</p>

            {points>=7?<p className='text-green-700 font-bold'>Passed</p>:
            <p className='text-red-700 font-bold'>Failed</p>}
          </div>
        </div>
        <div className='flex justify-center'>
          <Link to={'/'}><button onClick={handleHome} type="button" className="text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l  font-medium rounded-lg md:text-lg md:px-8 px-4 py-2 md:mt-6 mt-3 focus:outline-none ">Home</button></Link>
        </div>
      </div>
    </section>
  )
}

export default Result
