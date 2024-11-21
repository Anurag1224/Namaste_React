import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

    

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ); //c -> categories
  // console.log("thi is " + categories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-4">{name}</h1>
      <p className="font-medium text-lg">
        {cuisines.join(", ")} : {costForTwoMessage}
      </p>
      <h2 className="font-bold p-2 ">Menu</h2>
      {/* Categories accordions*/}
      {categories.map((category, index) => (
        <RestaurantCategory key ={category?.card?.card?.title} data = {category?.card?.card} showItems = {index == showIndex ? true : false}
         setShowIndex = {() => setShowIndex(index)} />
      
      ))}
    </div>
  );
};

export default RestaurantMenu;
