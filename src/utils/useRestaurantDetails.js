import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurantDetails = (resId) => {
  //define state variables for restaurant
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  //make an API call and fetch the restaurant data with the resId provided
  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = async () => {
    const response = await fetch(FETCH_MENU_URL + resId);
    const json = await response.json();

    const menuItemsList =
      json.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
    const itemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    const NestedItemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

    const menu = menuItemsList.map((item) => {
      if (
        item.card.card["@type"] === itemCategory ||
        item.card.card["@type"] === NestedItemCategory
      ) {
        return item.card.card;
      }
    });

    const modifiedData = {
      info: json.data.cards[0].card.card.info,
      menu: menu.filter((value) => value !== undefined),
    };

    setRestaurant(modifiedData);
  };

  return restaurant;
};

export default useRestaurantDetails;
