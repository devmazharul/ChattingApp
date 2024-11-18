import React from 'react';
import login from '../../img/login.png';
import google from '../../img/google.png';
import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  return (
    <div className='flex'>
        <div className='w-1/2 ml-[17%] mt-[221.83px]'>
            <h2 className='mb-[30px] font-bold text-[33.34px] leading-[45px] text-[#03014C]'>Login to your account!</h2>
            <button className='flex items-center gap-[10px] font-semibold text-[13.34px] leading-[18px] tracking-[2%] border-[2px] rounded-[10px] py-[22px] px-[42px] pr-[42px] hover:text-[#5F34F5] hover:border-[#968bbe]'>
                <img className='w-[20px] mi-[30px]' src={google} alt="" />
            Login with Google
            </button>
            <div className='mb-[61px]'>
            <h3 className='font-normal text-[13.34px] text-[#808080] mt-[32.7px] '>Email Addres</h3> 
            <input className='border-b-[2px] outline-none py-[16px] font-semibold text-[20px] text-[#03014C] leading-[27px' type="text" placeholder='Youraddres@email.com' />
            </div>
            <div className='mb-[61px]'>
            <h3 className='font-normal text-[13.34px] text-[#808080] mt-[32.7px] '>Password</h3> 
            <div className='flex relative'>
            <input className='border-b-[2px] border- outline-none py-[16px] font-semibold text-[20px] text-[#03014C] leading-[27px' type="password" placeholder='Enter your password' />
            <FaEyeSlash className='absolute bottom-[16.67px] left-[320px] text-[26px] text-[#808080]'/>
            </div>
            <button className='py-[26px] px-[122px] bg-[#5F34F5] rounded-[8.7px] mt-[56px] font-semibold text-[20px] leading-[28px] text-white hover:shadow-shadow'>
            Login to Continue
            </button>

            <h4 className='ml-[10%] mt-[35px] font-normal text-[13.34px] text-[#03014C]'>Don’t have an account ? <span className='text-[#EA6C00] cursor-pointer font-bold text-[13.34px]'>Sign up </span> </h4>
         
            </div>
          
            
        </div>
        <div className='w-1/2'>
        <img className='w-full h-screen object-cover' src={login} alt="" />
        </div>
      
    </div>
  )
}

export default Login
