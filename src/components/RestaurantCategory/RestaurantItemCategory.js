import RestaurantMenu from "../RestaurantMenu";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const RestaurantItemCategory = ({ itemCategory }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="item-category">
      {isVisible ? (
        <div
          className="item-category-header"
          onClick={() => setIsVisible(false)}
        >
          <p className="subheading-text">
            {itemCategory.title} ({itemCategory.itemCards.length})
          </p>

          <FaChevronUp />
        </div>
      ) : (
        <div
          className="item-category-header"
          onClick={() => setIsVisible(true)}
        >
          <p className="subheading-text">
            {itemCategory.title} ({itemCategory.itemCards.length})
          </p>

          <FaChevronDown />
        </div>
      )}

      {!isVisible && <div className="section-border"></div>}

      {isVisible && (
        <RestaurantMenu menuItems={itemCategory.itemCards.slice(1)} />
      )}
    </div>
  );
};
export default RestaurantItemCategory;
