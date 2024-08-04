import { Component, useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Component>
        <FoodList foodData={foodData} />
      </Component>
    </div>
  );
}

export default App;
