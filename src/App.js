import React, { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Country from "./components/Country/Country";

function App() {
  const [country, setCountry] = useState([]);
  const [cart,setCart]=useState([]);
  const handleAddCountry = (country) => {
    const newCart=[...cart,country]
    setCart(newCart)
  };
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => setCountry(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
    <h1> Country loaded: {country.length}</h1>
    <h3>Country added: {cart.length}</h3>
    <Cart cart={cart}></Cart>

      {country.map((country) => (
        <Country
          handleAddCountry={handleAddCountry}
          country={country}
        ></Country>
      ))}
    </div>
  );
}

export default App;
