import "./App.css";
import {useEffect ,useState} from "react";
import Header from "./Components/Header";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import Filters from "./Components/Filters";




function App() {
  const [products,setProducts] = useState([]);
  const [filters,setFilters] = useState([]);
  const [cart,setCart] = useState([]);

  const [activeCategory,setActiveCategory] = useState('All');
  const [activePrice,setActivePrice] = useState('');
  const [isShowCart,setIsShowCart] = useState(false);

  useEffect(()=>{
    const fetchProducts = async () => {
      try{
        const data = await fetch('https://phones-dev.herokuapp.com/api/phones');
        const products = await data.json();

        setProducts(products.data);
        setFilters(products.data);
      }
      catch(err){

      }
    };

    fetchProducts();
  },[]);

  //Handle add to cart
const handleAddToCart = (product) =>{
  setCart((prev)=>{
    const findProductInCart = prev.find((item)=>item.id === product.id);

    if(findProductInCart){
      return prev.map((item)=>item.id === product.id  ? { ...item, amount: item.amount +1 } : item
        );
    }

   //first
    return [...prev, { ...product, amount:1 }];
  }

  );
};


//Handle remove from cart
const handleRemoveFromCart = (id) =>{
  setCart((prev)=>{
    return prev.reduce((cal,item)=>{
      if(item.id===id){
        if(item.amount===1) return cal;

        return [...cal, {...item,amount:item.amount -1}];
      }
      return [...cal, {...item}];

    },[]);
  });
};


  console.log(products);


  return (
    <div className="App ">
      <div className="bg-red-700 ">
      <Header 
      cart={cart} 
      setIsShowCart={setIsShowCart}/>
      </div>

      <div className="container mx-auto my-4">
      <Filters
      setActivePrice={setActivePrice}
      activePrice={activePrice}
      activeCategory={activeCategory} 
      setActiveCategory={setActiveCategory} />
      </div>

      <div className="flex flex-wrap my-4 container mx-auto">
        {products.map((product)=>(
            <Product 
            handleAddToCart={handleAddToCart}
             key={product.id} 
             product={product}/>
        ))}
      </div>

     {isShowCart && (
     <Cart 
     cart={cart}
     handleRemoveFromCart={handleRemoveFromCart}
     handleAddToCart={handleAddToCart} 
     setIsShowCart={setIsShowCart} />)}
    </div>
    );
}

export default App;



