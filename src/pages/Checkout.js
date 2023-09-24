import { useState } from "react";
import { Link } from "react-router-dom";

import { address } from "../constants";

import { BiHomeHeart } from "react-icons/bi";
import { HiOfficeBuilding } from "react-icons/hi";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";

const Checkout = () => {
  const [userAddress, setUserAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  return (
    <div className="container checkout">
      <p className="heading-text">Checkout</p>
      <div className="address-container">
        <p className="subheading-text">Select your address</p>
        <div className="all-address">
          {address.map((address, index) => (
            <div
              key={index}
              className={
                userAddress.id === address.id
                  ? "address checkout-selected"
                  : "address"
              }
              onClick={() => setUserAddress(address)}
            >
              {" "}
              <p>
                {address.AddressType === "Home" ? (
                  <BiHomeHeart size="1.5rem" />
                ) : (
                  <HiOfficeBuilding size="1.5rem" />
                )}
              </p>
              <p>{address.Name}</p>
              <p>{address.Mobile}</p>
              <p>{address.Address}</p>
            </div>
          ))}
        </div>
        {userAddress && (
          <div className="payment mtop20">
            <p className="subheading-text">Choose Payment Method</p>
            <div className="payment-method">
              <button
                className={
                  paymentMethod === "COD"
                    ? "payment-option checkout-selected"
                    : "payment-option"
                }
                onClick={() => setPaymentMethod("COD")}
              >
                {" "}
                <FaHandsHelping color="green" /> COD{" "}
              </button>
              <button
                className={
                  paymentMethod === "Credit Card"
                    ? "payment-option checkout-selected"
                    : "payment-option"
                }
                onClick={() => setPaymentMethod("Credit Card")}
              >
                {" "}
                <BsFillCreditCardFill color="green" /> Credit Cards{" "}
              </button>
            </div>
          </div>
        )}
      </div>
      {userAddress && paymentMethod && (
        <Link to="/order-summary" className="place-order mtop20">
          Place Order
        </Link>
      )}
    </div>
  );
};

export default Checkout;
