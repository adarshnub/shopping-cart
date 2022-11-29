import React from 'react';

 const Cart = ({setIsShowCart, cart}) => {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)]"
     onClick={()=>setIsShowCart(false)}
     >
        <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[250px] h-full absolute right-0">
            <h1 className="bg-red-400 py-2 text-white text-center">Cart</h1>
            <div className="flex flex-col items-center px-2">
              {cart.map((item)=>(
                <div key={item.id} className="text-center">
                <img 
                src={item.img}
                alt={item.names} />
                <h1 className="text-[0.8rem]">{item.name}</h1>
                <p className="text-red-600">{item.price}</p>
              </div>
              ))}
              
            </div>
        </div>
    </div>
  );
}

export default Cart;
