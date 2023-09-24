import { useState, useEffect } from "react";
import { FETCH_CATEGORY_MENU_URL } from "../constants";

const useCategory = (categoryId) => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(FETCH_CATEGORY_MENU_URL + categoryId);
        const json = await response.json();
        const resData = checkJsonData(json.data.cards);
        const categoryMenuData = {
          title: json.data.cards[0].card.card.title,
          description: json.data?.cards[0].card?.card?.description,
          filteredRestaurants: resData,
        };
        setRestaurant(categoryMenuData);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    }

    fetchData();
  }, [categoryId]);

  function checkJsonData(cards) {
    const restaurantInfos = [];

    for (let i = 0; i < cards.length; i++) {
      const info = cards[i]?.card?.card?.info;

      if (info !== undefined) {
        restaurantInfos.push(info);
      }
    }

    return restaurantInfos;
  }

  return restaurant;
};

export default useCategory;
