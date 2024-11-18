import registration from '../../img/registration.png'
import Input from './Input/Input'

const Registration = () => {
    return (
        <div className='flex'>

            <div className='w-1/2 mt-[140px] ml-[17%] ' >
                <h2 className='font-bold text-[34.4px] leading-[47px] text-[#11175D]'>Get started with easily register</h2>
                <h3 className='font-normal text-[20.64px] leading-[28px] text-[#808080]  mt-[13px] mb-[52px]'>Free register and you can enjoy it</h3>
                <div className='relative'>
                    <input className='w-[368px] border-[3px] rounded-[10px] outline-none py-[26px] px-[48px] font-semibold  text-[20.64px]  ' type="text" placeholder='' />
                    <p className='absolute top-[-10%] left-[40px] px-[16px] bg-white font-semibold text-[13.76px] leading-[19px] tracking-[7.5%] text-[#11175D]'>Email Address</p>
                </div>

               {/* <Input>
               <p>Full Name</p>
               </Input> */}

                <div className='relative my-[51.86px]'>
                    <input className='w-[368px] border-[3px] rounded-[10px] outline-none py-[26px] px-[48px] font-semibold  text-[20.64px] ' type="text" placeholder='' />
                    <p className='absolute top-[-10%] left-[40px] px-[31px] bg-white font-semibold text-[13.76px] leading-[19px] tracking-[7.5%] text-[#11175D]'>Ful name</p>
                </div>
                <div className='relative mb-[51.86px]'>
                    <input className='w-[368px] border-[3px] rounded-[10px] outline-none py-[26px] px-[48px] font-semibold  text-[20.64px]  ' type="password" placeholder='' />
                    <p className='absolute top-[-10%] left-[40px] px-[30px] bg-white font-semibold text-[13.76px] leading-[19px] tracking-[7.5%] text-[#11175D]'>Password</p>
                </div>

                <div>
                    {/* <a className='py-[20px] px-[148px] bg-[#5F35F5] rounded-[86px] font-semibold text-[20.64px] leading-[28px] text-white hover:shadow-shadow' href="" > Sign up</a> */}
                    <button className='py-[20px] px-[148px] bg-[#5F35F5] rounded-[86px] font-semibold text-[20.64px] leading-[28px] text-white hover:shadow-shadow'>
                    Sign up
                    </button>
                    <h4 className='ml-[10%] mt-[35px] font-normal text-[13.34px] text-[#03014C]'>Already  have an account ? <span className='text-[#EA6C00] cursor-pointer font-bold text-[13.34px]'>Sign In</span> </h4>
                </div>
            </div>


            <div className='w-1/2'>
                <img className='w-full h-screen object-cover' src={registration} alt="" />
            </div>

        </div>
    )
}

export default Registration
