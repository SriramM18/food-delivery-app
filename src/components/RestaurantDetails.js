import { useParams } from "react-router-dom";
import { ShimmerBlock, ShimmerLines } from "./Shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantInfo from "./RestaurantInfo";
import CartNavigation from "./CartNavigation";

const RestaurantDetails = () => {
  const { resId } = useParams();

  const restaurant = useRestaurantDetails(resId);

  return !restaurant ? (
    <ShimmerLines />
  ) : (
    <div className="restaurant-details">
      <RestaurantInfo restaurant={restaurant?.info} />
      <RestaurantCategory menu={restaurant?.menu} />
    </div>
  );
};

export default RestaurantDetails;
