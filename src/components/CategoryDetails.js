import { useState } from "react";
import { useParams } from "react-router-dom";
import useCategory from "../utils/useCategory";
import RestaurantCard from "./RestaurantCard";
import { ShimmerCards } from "./Shimmer";
import { Link } from "react-router-dom";

const CategoryDetails = () => {
  const { categoryId } = useParams();
  const restaurants = useCategory(categoryId);
  return restaurants?.length === 0 ? (
    <ShimmerCards />
  ) : (
    <>
      <p className="breadcrumbs">
        <Link to={"/"} key="home">
          Home /
        </Link>{" "}
        {restaurants.title}
      </p>
      <h1 className="main-content-text">{restaurants.title}</h1>
      <p className="main-content-subtext">{restaurants.description}</p>
      <div className="restaurant-lists">
        {restaurants.filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.id} key={restaurant.id}>
            <RestaurantCard {...restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoryDetails;
