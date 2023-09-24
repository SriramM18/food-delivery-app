import React from "react";
import { Link } from "react-router-dom";

const CategoryMenu = ({ categoryMenu }) => {
  let CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

  return (
    <div className="category">
      <h1 className="main-content-text">What's on your mind?</h1>
      <div className="category-menu">
        {categoryMenu !== undefined &&
          categoryMenu.map((item) => (
            <Link
              to={"/restaurant/category/" + item?.entityId?.slice(36, 41)}
              key={item.id}
            >
              <div className="category_menu_item">
                <img src={CDN_URL + item.imageId} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
