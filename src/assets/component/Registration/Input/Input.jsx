import React from 'react'

const Input = ({children }) => {
  return (
    <div>
        <div className='relative'>
                <input className='w-[368px] border-[3px] rounded-[10px] outline-none py-[26px] px-[48px] font-semibold  text-[20.64px]  ' type="text" placeholder='' />
                <p className='absolute top-[-10%] left-[40px] px-[16px] bg-white font-semibold text-[13.76px] leading-[19px] tracking-[7.5%] text-[#11175D]'>{children}</p>
                </div>
    </div>
  )
}

export default Input
