import { useEffect, useState } from "react";
import FooterSection from "./Components/DesignPart/FooterSection";
import HeaderSection from "./Components/DesignPart/HeaderSection";
import NavBar from "./Components/DesignPart/NavBar";
import Index from "./Components/Index";
import Recepes from "./Components/Recepes";

function App() {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [cooking, setCooking] = useState([]);

  useEffect(() => {
    fetch("fake-data.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);

  const handleClick = (e) => {
    const isExist = order.find((idx) => idx.id == e.id);
    if (!isExist) {
      setOrder([...order, e]);
    } else {
      alert();
    }
  };

  const handleRemove = (id) => {
    const isExist = order.filter((idx) => idx.id !== id);
    setOrder(isExist);
  };

  const handleCooking = (items) => {
    setCooking([...cooking, items]);
  };

  return (
    <div>
      <NavBar></NavBar>
      <HeaderSection></HeaderSection>
      <div className="grid grid-cols-12 gap-5 lg:mx-16 mx-5 mt-5">
        <div className="col-span-8 ">
          <div>
            <h1 className=" font-lexend mt-10 text-4xl font-semibold text-center">
              Our Recipes
            </h1>
            <p className="text-lg font-normal opacity-70 text-center mt-4 mb-8">
              If there’s one universal truth in life, it is this cake makes
              everything <br /> better. Whether you’re a fan of chocolate,
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 ">
            {menu.map((cart) => (
              <Recepes
                key={cart.ind}
                cart={cart}
                handleClick={handleClick}
              ></Recepes>
            ))}
          </div>
        </div>
        <div className="col-span-4 border-2 rounded-xl mt-[184px]">
          <Index
            order={order}
            handleRemove={handleRemove}
            handleCooking={handleCooking}
            cooking={cooking}
          ></Index>
        </div>
      </div>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
