import { FaLeaf } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const RestaurantInfo = ({ restaurant }) => {
  return (
    <div className="restaurant-info">
      <div className="restaurant-name">
        <h2 className="heading-text">{restaurant?.name}</h2>

        <p>{restaurant?.cuisines?.join(", ")}</p>
        <p>
          {restaurant?.areaName}, {restaurant?.city}
        </p>
        {restaurant?.veg && (
          <p className="mtop10">
            <FaLeaf color="green" /> Pure Veg
          </p>
        )}
      </div>
      <div className="restaurant-basics">
        <h4>
          <i className="fa fa-star"></i> {restaurant?.avgRating}{" "}
        </h4>
        <p>{restaurant?.totalRatingsString}</p>
      </div>
    </div>
  );
};

export default RestaurantInfo;
