import React from 'react';


const categories = [
    {
        id:1,
        name:'All',
    },
    {
        id:2,
        name:'Phone',
    },
    {
        id:3,
        name:'Laptop',
    },
    {
        id:4,
        name:'Watch',
    },
];

const prices = [
    {
        id:1,
        name:'Less than 1000',
        value:'1-1000',
    },
    {
        id:2,
        name:'From 1000-1500',
        value:'btw10001500',
    },
    {
        id:3,
        name:'More than 1500',
        value:'gt1500',
    },
    {
        id:'4',
        name:'Clear Filters',
        value:'clear',
    },
];

const Filters = ({activeCategory ,setActiveCategory,activePrice ,setActivePrice}) => {
  return (
    <div>
        <div>
            {categories.map((item)=>(
                <button 
                onClick={()=>setActiveCategory(item.name)}
                key={item.id} 
                className ={`bg-white border-2 border-gray-500 text-black rounded-lg px-4 py-2 mr-2 mb-2
                 ${activeCategory===item.name && 'bg-blue-300 text-white border-blue-300'}`}
                >
                    {item.name}</button>
            ))}
        </div>
        <div>
            {prices.map((item)=>(
                <button 
                
                key={item.id} 
                onClick={() =>item.value !== 'clear'
                 ? setActivePrice(item.name) 
                 : setActivePrice('')}
                className ={`bg-white border-2 border-gray-500 text-black rounded-lg px-4 py-2 mr-2 mb-2
                 ${activePrice===item.name && 'bg-lime-300 text-white border-lime-300'}`}
                >
                    {item.name}
                    </button>
            ))}
        </div>
    </div>
  );
};

export default Filters;

