import React from 'react';
import login from '../../img/login.png';
import google from '../../img/google.png';
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
           <div className='flex bg-gradient-to-l from-white  to-[#AACBD3]'> 
        <div className='w-1/2 ml-[17%] mt-[7%]'>
           <h2 className='mb-[30px] font-bold text-[33.34px] leading-[45px] text-[#03014C]'>Login to your account !</h2>
            <button className='flex items-center gap-[10px] font-semibold text-[13.34px] leading-[18px] tracking-[2%] border-[2px] rounded-[10px] py-[22px] px-[42px] pr-[42px] hover:text-[#5F34F5] hover:border-[#968bbe]'>
                <img className='w-[20px] mi-[30px] ' src={google} alt="" />
            Login with Google
            </button>
            <div className='mb-[61px] w-[425px]'>
            <h3 className='font-normal text-[13.34px] text-[#808080] mt-[32.7px] '>Email Addres</h3> 
            <input className='w-full border-b-[2px] outline-none py-[16px] font-semibold text-[20px] text-[#03014C] leading-[27px placeholder-[#11175D] bg-transparent' type="text" placeholder='Useremail@gmail.com' />
            </div>
            <div className='relative w-[425px]'>
            <h3 className='font-normal text-[13.34px] text-[#808080] mt-[32.7px] '>Password</h3> 
            <input className='w-full border-b-[2px] outline-none py-[16px] font-semibold text-[20px] text-[#03014C] leading-[27px placeholder-[#11175D] bg-transparent' type="password" placeholder='Enter your password' />
            <FaEyeSlash className='absolute bottom-[16.67px] right-0 text-[26px] cursor-pointer'/>
            </div>
            <div className='flex justify-between w-[425px] mt-[32.7px]'>
              <div className='flex gap-[10px] cursor-pointer'>
              <input className="cursor-pointer accent-green-600" type="checkbox" /> <h3>Remember me</h3>
              </div>
              <h4 className='cursor-pointer text-[#EA6C00]'>Forget Password?</h4>
            </div>
            <p className='w-[425px] py-[26px] px-[122px] bg-[#5F34F5] rounded-[8.7px] mt-[56px] font-semibold text-[20px] leading-[28px] text-white hover:shadow-shadow cursor-pointer'>
            Login to Continue
            </p>
            <h4 className='w-[425px] text-center mt-[35px] font-normal text-[13.34px] text-[#03014C]'>Don’t have an account ? <span className='text-[#EA6C00] cursor-pointer font-bold text-[13.34px]'><Link to="/">Register now </Link> </span> </h4>
        </div>
        <div className='w-1/2'>
        <img className='w-full h-screen object-cover' src={login} alt="" />
        </div>
      
    </div>
  )
}

export default Login
