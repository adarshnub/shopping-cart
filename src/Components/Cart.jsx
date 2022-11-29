import React from 'react';
import {AiOutlinePlusSquare ,AiOutlineMinusSquare} from 'react-icons/ai';

 const Cart = ({setIsShowCart, cart ,handleAddToCart ,handleRemoveFromCart}) => {

  //cart total price calculation 
  const total = (arr) => {
    return arr.reduce((cal,item)=>{
      return cal + item.price *item.amount;
    },0);
  };

  //Dollar conversion
  const DollarUsd = new Intl.NumberFormat('en-US', {
    style:'currency',
    currency:'USD',
});


  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)]"
     onClick={()=>setIsShowCart(false)}
     >
        <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[250px] h-full absolute right-0 overflow-y-scroll">
            <h1 className="bg-red-400 py-2 text-white text-center">Cart</h1>
            <div className="flex flex-col items-center px-2 py-4 ">
              {cart.map((item)=>(
                <div key={item.id} className="text-center border-b-[3px] w-full mb-2 flex flex-col items-center hover:bg-blue-100">
                <img 
                className="w-[100px] h-[100px]"
                src={item.img}
                alt={item.names} />
                <p className="text-red-700 font-bold w-6 h-6 bg-blue-300 rounded ">{item.amount}</p>
                <h1 className="text-[0.8rem]">{item.name}</h1>
  
                <div className="flex flex-row gap-2">
                <button onClick={() => handleRemoveFromCart(item.id)}><AiOutlineMinusSquare className="text-[30px] text-gray-500 hover:bg-gray-600 hover:text-white" /></button>
                <p className="text-red-600">{DollarUsd.format(item.price)}</p>
                <button onClick={() => handleAddToCart(item)} ><AiOutlinePlusSquare className="text-[30px] text-gray-500 hover:bg-gray-600 hover:text-white" /></button>
                
                </div>
                
              </div>
              ))}

              {cart.length > 0 && <p>Total: {DollarUsd.format(total(cart))}</p>}
            </div>
        </div>
    </div>
  );
}

export default Cart;
