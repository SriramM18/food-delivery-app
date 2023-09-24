import RestaurantNestedItemCategory from "./RestaurantCategory/RestaurantNestedItemCategory";
import RestaurantItemCategory from "./RestaurantCategory/RestaurantItemCategory";
import CartNavigation from "./CartNavigation";
import { useSelector } from "react-redux";

const RestaurantCategory = ({ menu }) => {
  const cartCount = useSelector((store) => store.cart.totalItemsCount);
  return (
    <div className="menu">
      {menu.map((item, index) => (
        <div className="menu-category" key={index}>
          {item.categories ? (
            <RestaurantNestedItemCategory nestedCategory={item} />
          ) : (
            <RestaurantItemCategory itemCategory={item} />
          )}
        </div>
      ))}
      {cartCount > 0 && <CartNavigation />}
    </div>
  );
};

export default RestaurantCategory;
