import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [option, setOption] = useState("All")


  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    setFoods([...foods, newFood]);
  }


  function handleLiClick(id){
    //Don't use .remove() method. This was used for understanding purposes
    // console.log(event.target);
    // event.target.remove()
    // console.log(id);
    //remove an element from the array based of the id and filter method
    // const newFoodArray = foods.filter((food) => food.id !== id);
    // setFoods(newFoodArray);
    // update an element
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        console.log(food)
        // console.log({...food, heatLevel: food.heatLevel += 1});
       return  {...food, heatLevel: food.heatLevel + 1};
      }
      else {
        return food;
      }
    })

    setFoods(newFoodArray);
  }


  function handleOption(event){
    setOption(event.target.value);
  }


  const foodsToDisplay = foods.filter((food) => {
    if (option === "All"){
      return true;
    }else {
      return food.cuisine === option;
    }
  });


  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));


  return (
    <div>
      <select name="filter" onChange={handleOption}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <br></br>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
