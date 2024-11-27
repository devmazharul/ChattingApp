import { useState } from 'react'
import registration from '../../img/registration.png'
import Input from './Input/Input'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcApprove } from "react-icons/fc";
import { Link } from 'react-router-dom';


const Registration = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');

    const [emailErr, setEmailErr] = useState('');
    const [fullNameErr, setFullNameErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const [emailApprove, setEmailApprove] = useState('')

    const [showpassword, setshowpassword] = useState('false')

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailErr('')
    };
    console.log(email)

    const handleFullName = (e) => {
        setFullName(e.target.value)
        setFullNameErr('')
    };

    const handlepassword = (e) => {
        setPassword(e.target.value)
        setPasswordErr('')
    };
    // console.log(email)
    const handleSubmit = () => {
        if (!email) {
            setEmailErr("Please enter a valid email address")
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setEmailErr(" Sorry, please type a valid email")
            }
        }


        if (!fullName) {
            setFullNameErr("Enter your Full Name")
        } else {
            if (!/^([a-zA-Z ]){1,30}$/.test(fullName)){
                setFullNameErr("Only Alphabet are allowed")
            }
        }

        if (!password) {
            setPasswordErr("Passwords must be eight characters")
        } else {
            if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(password)) {
                setPasswordErr("Password must include at least one [A-Z],[a-z],[0-9],special character and 8 characters long")
            }
        }
    }


    return (
        <div className='flex'>

            <div className='w-1/2 mt-[7%] ml-[17%]'>
                <h2 className='font-bold text-[34.4px] leading-[47px] text-[#11175D]'>Get started with easily register</h2>
                <h3 className='font-normal text-[20.64px] leading-[28px] text-[#808080]  mt-[13px] mb-[52px]'>Free register and you can enjoy it</h3>
                <div className='relative w-[368px] '>
                    <p className=' absolute top-[-10%] left-[40px] px-[16px] bg-white font-semibold text-[13.76px] leading-[19px] tracking-[7.5%] text-[#585D8E]'>Email Address</p>
                    <input onChange={handleEmail} className='w-full border-[3px] rounded-[10px] outline-none py-[26px] px-[48px] font-semibold  text-[20.64px] placeholder-[#11175D]' type="text" placeholder='Useremail@gmail.com' />   
                    <FcApprove className='absolute top-[40%] right-[20px] text-xl ' />
                    <p className='absolute left-0 bottom-[-30px] text-red-500'>{emailErr}</p>

                </div>

                {/* <Input>
               <p>Full Name</p>
               </Input> */}

                <div className='relative my-[51.86px]'>
                    <p className='absolute top-[-10%] left-[40px] px-[31px] bg-white font-semibold text-[13.76px] leading-[19px] tracking-[7.5%] text-[#585D8E]'>Full name</p>
                    <input onChange={handleFullName} className='w-[368px] border-[3px] rounded-[10px] outline-none py-[26px] px-[48px] font-semibold  text-[20.64px] placeholder-[#11175D]' type="text" placeholder='User name' />

                    <p className='absolute left-0 bottom-[-30px] text-red-500'>{fullNameErr}</p>
                </div>
                <div className='relative mb-[51.86px] w-[368px]'>
                    {
                        showpassword ? (<FaEye
                            onClick={() => setshowpassword(!showpassword)}
                            className='absolute top-[40%] right-[20px] text-xl cursor-pointer' />)
                            :
                            (<FaEyeSlash
                                onClick={() => setshowpassword(!showpassword)}
                                className='absolute top-[40%] right-[20px] text-xl cursor-pointer' />)
                    }
                    <p className='absolute top-[-10%] left-[40px] px-[30px] bg-white font-semibold text-[13.76px] leading-[19px] tracking-[7.5%] text-[#585D8E]'>Password</p>
                    <input onChange={handlepassword} className='w-full border-[3px] rounded-[10px] outline-none py-[26px] px-[48px] font-semibold  text-[20.64px] placeholder-[#11175D] '
                        type={showpassword ? "password" : "text"} placeholder='......' />

                    <p className='absolute left-0 bottom-[-50px] text-red-500'>{passwordErr}</p>
                </div >
                <p onClick={handleSubmit} className='w-[368px] py-[20px] px-[148px] bg-[#5F35F5] rounded-[86px] font-semibold text-[20.64px] leading-[28px] text-white hover:shadow-shadow cursor-pointer'>
                    Sign up
                </p>

                <h4 className='w-[368px] text-center mt-[35px] font-normal text-[13.34px] text-[#03014C]'>Already  have an account ? <span className='text-[#EA6C00] cursor-pointer font-bold text-[13.34px]'><Link to="/Login">Login</Link> </span> </h4>

            </div>


            <div className='w-1/2'>
                <img className='w-full h-screen object-cover' src={registration} alt="registration image" />
            </div>

        </div>
    )
}

export default Registration
