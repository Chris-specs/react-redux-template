import { useState } from 'react';
import {
    SiGithub,
    SiReact,
    SiReactrouter,
    SiTailwindcss,
    SiRedux,
} from 'react-icons/si';
import Code from '../assets/Code.svg';
import Axios from '../assets/Axios.svg';
import Icons from '../assets/Icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getPostAction } from '../actions/post.action';

const Home = () => {
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const getPost = () => {
        dispatch(getPostAction());
        setShow(true);
    };

    // REDUX SELECTOR
    const data = useSelector((state) => state.post.post);

    return (
        <div className='min-h-screen max-h-screen overflow-hidden bg-brand-bg font-poppins'>
            <div className='flex flex-row justify-end w-full py-5'>
                <a
                    className='font-semibold flex justify-center items-center mr-5 text-base text-white'
                    href='https://github.com/Chris-specs'
                >
                    Christian
                    <SiGithub className='ml-3 text-4xl' />
                </a>
            </div>
            <div className='md:grid grid-cols-2 w-full pt-6 md:pt-28'>
                <div className='md:pl-14 lg:pl-28'>
                    <h1 className='text-5xl md:text-8xl font-bold text-brand text-center md:text-left'>
                        REACT 
                        <span className=' md:hidden text-5xl md:text-8xl font-bold text-brand-purple text-center md:text-left ml-3'>
                        REDUX
                        </span>
                    </h1>
                    <h1 className='hidden md:block text-6xl md:text-8xl font-bold text-brand-purple text-center md:text-left'>
                        REDUX
                    </h1>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center md:text-left'>
                        Starter template
                    </h2>
                    <p className='text-white md:text-xl mt-8 md:mt-16 w-full lg:w-7/12 text-center md:text-left px-10 md:px-0'>
                        This is a starter template for React/Redux projects,
                        includes a next pakages...
                    </p>
                    <div className='flex justify-between w-full md:w-10/12 lg:w-6/12 mt-6 md:mt-16 px-12 md:px-0'>
                        <SiReact className='text-4xl text-brand' />
                        <SiRedux className='text-4xl text-brand-purple' />
                        <SiTailwindcss className='text-4xl text-icon' />
                        <SiReactrouter className='text-4xl text-white' />
                        <img src={Axios} alt='Axios' />
                        <img src={Icons} alt='React Icons' />
                    </div>
                    <div className='block'>
                        <a
                            className='block w-10/12 lg:w-6/12 text-center bg-brand text-brand-bg p-3 font-semibold text-lg rounded-xl shadow-brand mt-8 md:mt-16 mx-auto md:mx-0'
                            href='https://github.com/Chris-specs/react-redux-template'
                        >
                            Get code
                        </a>
                        <button
                            className='block w-10/12 lg:w-6/12 text-center bg-brand-purple text-white p-3 font-semibold text-lg rounded-xl shadow-brand-purple mt-6 mx-auto md:mx-0 mb-6'
                            onClick={() => getPost()}
                        >
                            Try redux action
                        </button>
                    </div>
                </div>
                {show ? (
                    <div className='flex justify-center lg:items-center'>
                        <div className='w-11/12 md:w-9/12 lg:h-3/6 bg-brand-bg shadow-brand-dark rounded-3xl p-4 md:p-8'>
                            <p className='text-brand font-bold text-sm md:text-2xl mb-4'>User ID: <span className='text-white font-normal text-sm md:text-xl'>{data.userId}</span></p>
                            <p className='text-brand font-bold text-sm md:text-2xl mb-4'>Post ID: <span className='text-white font-normal text-sm md:text-xl'>{data.id}</span></p>
                            <p className='text-brand font-bold text-sm md:text-2xl mb-4'>Title: <span className='text-white font-normal text-sm md:text-xl'>{data.title}</span></p>
                            <p className='text-brand font-bold text-sm md:text-2xl'>Body ID: <span className='text-white font-normal text-sm md:text-xl'>{data.body}</span></p>
                        </div>
                    </div>
                ) : (
                    <div className='flex justify-end'>
                        <img
                            className='mt-16 md:mt-0 md:w-11/12'
                            src={Code}
                            alt='Code'
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
export default Home;
