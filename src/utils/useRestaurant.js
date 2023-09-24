// import { useState, useEffect } from "react";
// import { FETCH_RESTAURANTS } from "../constants";

// const useRestaurant = () => {
//   const [allRestaurants, setAllRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   //const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     //API CALL
//     console.log("API call");
//     getRestaurants();
//   }, []);

//   async function getRestaurants() {
//     const data = await fetch(FETCH_RESTAURANTS);
//     const json = await data.json();
//     setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
//     setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards);
//   }

//   console.log("AR", allRestaurants);
//   console.log("FR", filteredRestaurants);
//   return { allRestaurants, setFilteredRestaurants };
// };

// export default useRestaurant;
