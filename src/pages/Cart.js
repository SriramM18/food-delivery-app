import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import cartImage from "../assets/svg/empty.svg";

import CartItems from "../components/CartItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="container cart-container">
      <h2 className="heading-text">Cart Items</h2>

      {Object.keys(cartItems).length > 0 ? (
        <CartItems cartItems={cartItems} />
      ) : (
        <div className="empty-cart">
          <p className="paragraph">
            Nothing here! Try adding some delicious meals from our menu!
          </p>
          <img className="display-img-bg" src={cartImage} alt="cart" />

          <Link className="place-order" to="/">
            See Restaurants
          </Link>
        </div>
      )}

      {Object.keys(cartItems).length > 0 && (
        <Link to="/checkout" className="place-order mtop20">
          Checkout
        </Link>
      )}
    </div>
  );
};

export default Cart;
