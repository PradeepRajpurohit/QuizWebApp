import React, { useState } from 'react'
import bg from '../assests/bg.jpg'
import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import * as Action from '../store/result_reducer'


const Home = () => {

    const [domain,setDomain] = useState('java');
    const navigate = useNavigate()
    const [warn, setWarn] = useState('hidden');
    const [user, setUser] = useState('');
    const dispatch = useDispatch();

    const handleUser = (e) => {
        setUser(e.target.value);
    }

    const handleStart = () => {
        if (user.length <= 3) {
            setWarn('')
        }
        else {
            dispatch(Action.setuserId(user))
            navigate(`/quiz/${domain}`)
        }
    }

    const handleDomain = (e) =>{
        setDomain(e.target.value);
    }

    return (
        <section className={' h-screen w-screen bg-cover flex md:justify-start'} style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat' }}>
            <div className='px-8 flex flex-col justify-center md:ml-24 text-white'>
                <h1 className='md:px-12 font-bold text-3xl md:text-6xl text-center'>Coding Quizes</h1>
                <h1 className='font-semibold text-lg md:text-2xl text-center'>Test your coding skills</h1>
                <ul className='md:my-8 my-4 list-disc text-sm text-justify'>
                    <li>There is 10 MCQ Question in quiz of your selected domain.</li>
                    <li>Each Question has 4 options with one correct option.</li>
                    <li>Each Question carry one Marks, no negetive marking is there.</li>
                    <li>To Pass the Quiz you have to score atleast 70% marks.</li>
                    <li>You can give test several times.</li>
                </ul>
                <div className='space-x-2 md:text-lg text-sm'>
                    <label className='md:text-lg font-medium' htmlFor="domain">Choose your Domain :</label>

                    <select onChange={handleDomain} className='bg-transparent border-2 text-center rounded' name="domain" id="domain">
                        <option className='text-pink-800' value="java">Java</option>
                        <option className='text-pink-800' value="javascript">JavaScript</option>
                        <option className='text-pink-800' value="python">Python</option>
                        <option className='text-pink-800' value="react">React</option>
                    </select>
                </div>
                <input className='md:mt-8 mt-4 p-2 px-6 rounded text-black focus:outline-none' type='text' name='name' id='name' placeholder='Your Name' value={user} onChange={handleUser} required />
                <div className={`text-sm text-red-600 ${warn}`}>Enter the username more then 3 letter.</div>
                <button onClick={handleStart} type="button" className="w-full text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l  font-medium rounded-lg text-lg px-5 py-2 md:mt-6 mt-3 focus:outline-none ">Start</button>
            </div>
        </section>

    )
}

export default Home
