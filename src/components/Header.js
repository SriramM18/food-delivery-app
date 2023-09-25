import { NavLink, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <Link to="/" className="logo-items">
      <img
        data-testid="logo"
        className="logo"
        alt="logo"
        src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg"
      />
      <p className="logo-text colblack">FoodGenie.</p>
    </Link>
  );
};

const Header = () => {
  const cartCount = useSelector((store) => store.cart.totalItemsCount);

  const location = useLocation();
  // console.log(location.pathname);

  return (
    <div className="header">
      <div className="header-items">
        <Title />
        <div className="navigation-menu">
          <div className="nav-items">
            <ul>
              <li className="search-header-box">
                <NavLink to="/search" className="search-header">
                  <svg
                    className="searchSVG"
                    viewBox="5 -1 12 25"
                    height="17"
                    width="17"
                    fill="#686b78"
                  >
                    <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
                  </svg>
                  Search
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact">Offers</NavLink>
              </li>

              <li className="cart-logo">
                {location.pathname !== "/checkout" &&
                  location.pathname !== "/order-summary" && (
                    <Link to="/cart" className="cart-logo">
                      {cartCount > 0 ? (
                        <span className="cart-logo-span">
                          <svg
                            class="cart-full"
                            viewBox="-1 0 37 32"
                            height="20"
                            width="20"
                            fill="#686b78"
                          >
                            <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                          </svg>
                          <span
                            data-testid="cart"
                            className="cart-count cart-full-no"
                          >
                            {cartCount}
                          </span>{" "}
                        </span>
                      ) : (
                        <span className="cart-logo-span">
                          <svg
                            class="cart-empty"
                            viewBox="-1 0 37 32"
                            height="20"
                            width="20"
                            fill="#686b78"
                          >
                            <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                          </svg>
                          <span data-testid="cart" className="cart-count">
                            {cartCount}
                          </span>{" "}
                        </span>
                      )}
                      Cart
                    </Link>
                  )}{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
