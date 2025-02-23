import React from 'react'
import { Link } from 'react-router'
import NavBar from '../../components/navbar'
import NavSignUp from '../../components/navsignup'

export default function SuccessCheckout() {
  return (
    <div className="relative flex flex-col flex-1 p-[10px]">
        <div className="absolute w-[calc(100%-20px)] min-h-[calc(100vh-20px)] h-[calc(100%-20px)] bg-[#060A23] -z-10 rounded-[20px]">
            <img src="/assets/images/backgrounds/background-glow.png" className="absolute bottom-0 transform -translate-x-1/2 left-1/2" alt="" />
        </div>
        <nav className="flex items-center justify-between p-[30px]">
            <NavBar />
            <NavSignUp />
        </nav>
        <h1 className="font-extrabold text-[46px] leading-[69px] text-white text-center m-auto">Checkout Success <br />Please Log In to Continue</h1>
        <Link to="/manager/signin" >
            <div className="flex items-center justify-center gap-3 w-max mx-auto rounded-full mt-5 border p-[20px_50px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
                <span className="font-semibold text-white">Sign In Now</span>
            </div>
        </Link>
    </div>
  )
}
