import React from 'react';
import { openModal } from '../store/modalSlice';
import { useDispatch } from "react-redux";
const LoginRegister = () => {
    const dispatch = useDispatch();
  return (
    <div className='flex flex-col bg-[#EFE8FE] shadow-xl  w-fit p-8 py-14 items-center justify-center border-2 rounded-xl'>
      <button onClick={()=>  dispatch(openModal({ name: 'Login'}))}  className='btn bg-[#3a3a3a]'>Log In</button>
      <div className='border-b-2 my-3 border-black  flex items-center justify-center'><span className='text-gray-700 p-1 text-xs rounded-xl'>Don't have an Account?
</span></div>
      <button className='btn' onClick={()=>  dispatch(openModal({ name: 'Register'}))}>Create Account</button>
    </div>
  );
};

export default LoginRegister;
