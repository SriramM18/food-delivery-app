import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuid } from "uuid";
import { TbDiscountCheckFilled } from "react-icons/tb";

import ConfirmOrder from "../assets/svg/confirmed.svg";

import { getCartTotal } from "../utils/totalPrice";
import { clearCart } from "../utils/cartSlice";

import Error from "../components/Error";

const OrderSummary = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalAmount = getCartTotal(cartItems);
  const unique_id = uuid();
  const orderID = unique_id.slice(0, 6);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(clearCart());
    };
  }, []);

  return Object.values(cartItems).length <= 0 ? (
    <Error />
  ) : (
    <div className="container order-summary">
      <p className="heading-text">Order Summary</p>
      <p className="order-confirm-info">
        {" "}
        <TbDiscountCheckFilled color="green" size="1.5rem" />
        Your Order is Confirmed!
      </p>

      <img className="display-img-md mtop10 mbottom10" src={ConfirmOrder} />
      <p>Sit back while we deliver it in less than 30 minutes!!</p>
      <p className="heading-text mtop20">Order Details</p>
      <p className="mbottom10">Order ID: #{orderID.toUpperCase()}</p>

      <div className="order-summary-details">
        <div className="cart-order-summary">
          {Object.values(cartItems).map((item) => (
            <div key={item.id} className="cart-summary-item">
              <p className="item-name">{item.name}</p>

              <p>{item.quantity} pc.</p>
              <p>₹ {item.price / 100}</p>
            </div>
          ))}
          <div className="total-bill">
            <h3 className="subheading-text">To Pay</h3>
            <h3 className="heading-text">₹ {totalAmount}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
