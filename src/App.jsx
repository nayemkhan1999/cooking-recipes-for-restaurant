import { useEffect, useState } from "react";
import Index from "./Components/Index";
import Recepes from "./Components/Recepes";

function App() {
  const [menu,setMenu] = useState([])
  const [order,setOrder] = useState([])

  useEffect(()=>{
    fetch("fake-data.json")
    .then(res=> res.json())
    .then(data=> {
      setMenu(data);
    })
  },[])

  const handleClick=(e)=>{
    setOrder([...order,e])
  }
  console.log(order);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Our Recipes</h1>
     <div className="grid grid-cols-12 gap-5 lg:mx-16 mx-5 mt-5">
      <div  className="col-span-8 ">
        <div className="grid grid-cols-2 gap-5">
        {
          menu.map((cart)=>
          <Recepes key={cart.ind} cart={cart} handleClick={handleClick} ></Recepes>
          )
        }

        </div>

      </div>
      <div className="col-span-4 border-2 rounded-xl">
     <Index order={order}></Index>
     </div>
     </div>
     
    </div>
  );
}

export default App;
