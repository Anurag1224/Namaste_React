import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, sla } = resData?.info;
  // const {deliveryTime} = resData?.info?.sla;
  return (
    <div className="m-4 p-4 h-[400px] w-[250px] bg-stone-200 rounded-md hover:bg-orange-300 ">
      <img
        alt="res-image"
        className="h-[180px] w-[242px] rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="py-2 font-bold text-lg ">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla?.deliveryTime} Mins</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3;
    // console.log(resData);
    
    return (
      <div>
        
        <label className="absolute bg-white text-black m-2 p-1 rounded-lg font-medium ">
          {header} {subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
