import { IMG_CDN_URL } from "../constants";

import ItemQuantity from "./ItemQuantity";
import { ShimmerLines } from "./Shimmer";

import { FaRegStopCircle, FaRegCaretSquareUp } from "react-icons/fa";

const RestaurantMenu = ({ menuItems }) => {
  // Object.values(
  //   menuItems.map((item) => {
  //     console.log(item.card.info.ribbon);
  //   })
  // );

  return !menuItems ? (
    <ShimmerLines />
  ) : (
    <div className="restaurant-menu">
      {Object.values(menuItems).map((item) => (
        <div className="menu-items" key={item.card.info?.id}>
          <div className="item-details">
            <div className="item-extras">
              {/* Check for veg/non veg */}
              {item.card.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
                <FaRegCaretSquareUp className="nonveg" size="1.25rem" />
              ) : (
                <FaRegStopCircle className="veg" size="1.25rem" />
              )}
              {/* Check for Bestsellers */}
              {item?.card?.info?.ribbon?.text === "Bestseller" && (
                <span className="bestseller">
                  <i className="fa fa-star"></i> Bestseller
                </span>
              )}
            </div>

            <h4>{item.card.info?.name}</h4>

            {item.card?.info?.price ? (
              <p>₹{item.card.info?.price / 100}</p>
            ) : (
              <p>₹{item.card.info?.defaultPrice / 100}</p>
            )}
            <span className="item-desc">{item.card.info?.description}</span>
          </div>
          <div className="item-img">
            {!item.card.info?.imageId ? null : (
              <img src={IMG_CDN_URL + item.card.info?.imageId} />
            )}
            <div className="cart-action">
              <ItemQuantity item={item.card.info} key={item.card.info.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
