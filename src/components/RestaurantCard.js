import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, sla } = resData?.info;
  // const {deliveryTime} = resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        alt="res-image"
        className="res-image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla?.deliveryTime} Mins</h4>
    </div>
  );
};

export default RestaurantCard;
