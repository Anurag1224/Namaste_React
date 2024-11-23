import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserInfoContext from "../utils/UserInfoContext";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // console.log("body rendered");
  // console.log(listOfRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANT_URL);

      const json = await data.json();

      // console.log(json);

      setlistOfRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div className="w-6/12 m-auto shadow-lg bg-amber-100 p-4 content-center">
        <h1 className = "m-5 text-center text-xl font-medium">
          Looks Like You're Offline !! Please Check Your Internet Connection
        </h1>
      </div>
    );

  const {loggedInUser,setUserName} = useContext(UserInfoContext);  

  return listOfRestaurant.length === 0 ? (
    <Shimmer /> // conditional rendering based on ternary operator
  ) : (
    <div className="body">
      <div className="m-2 p-2 flex flex-wrap items-center">
        <input
          className="h-6 border border-solid border-black px-2"
          type="search"
          data-testid = "searchInput"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="m-2 px-2 bg-gray-600 y-200 text-white font-medium rounded-md hover:bg-gray-500 "
          onClick={() => {
            // console.log(searchText);

            const filteredRestaurant = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurants(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="m-2 px-2 bg-gray-600 y-200 text-white font-medium rounded-md hover:bg-gray-500 "
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setlistOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>

        <div className="m-2 p-2 flex flex-wrap items-center">
          <label className="font-medium px-2" >UserName  </label>
          <input className="border border-solid border-black px-2" value={loggedInUser} onChange={(e) => {
            setUserName(e.target.value)
          }}></input>
        </div>
      </div>
      <div className="flex flex-wrap bg-white justify-evenly">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
