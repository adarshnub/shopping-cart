import React from 'react';
import logo from "../Assets/logoS.png";
import { BiPhoneCall } from 'react-icons/bi';
import {AiOutlineShoppingCart } from 'react-icons/ai';


 const Header = ( {setIsShowCart,cart} ) => {
  return (
    <div className="container mx-auto flex items-center justify-between  py-1 text-white px-2">
        <img  
        src={logo}
        alt="logo" className="w-16 h-16"/>
        <div className="flex items-center">
            <div className="flex items-center mr-2">
            < BiPhoneCall className="text-[30px] mr-2" />
                <div>
                    <p>Call to buy</p>
                    <p>1999999</p>
                </div>
            </div>
            <div className="relative" onClick={()=>setIsShowCart(true)}>
            <AiOutlineShoppingCart className="text-[24px]" />
            {cart.length > 0 && (<span className="bg-blue-700 text-white w-5 h-5 rounded-full absolute -top-4 left-2 text-center leading-5 ">
                {cart.length}
            </span>)}
            
            </div>
        </div>
    </div>
  )
}


export default Header;