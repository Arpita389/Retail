import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./payment.css";
import Submit from "../login/submit";
const PaymentPage = () => {
  const [paymentOption, setPaymentOption] = useState("");
  const [pinNumber, setPinNumber] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  const handlePinChange = (event) => {
    setPinNumber(event.target.value);
  };

  const handlePayment = () => {
    if (pinNumber.length === 6) {
      setTimeout(() => {
        setPaymentSuccess(true);
        alert("Payment successful! 🎉💰");
        navigate("../login/submit");
      }, 2000);
    } else {
      alert("PIN should be a 6 digit number 🔢");
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-content">
        <div className="payment-image">
          <img
            src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/01/27/4e3e65ad3dfa116ec94a40c401b97ebe_original.jpg"
            alt="Payment"
          />
        </div>
        <div className="payment-form">
          <h1 className="payment-title">Payment Page 🛍️</h1>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="paymentOption"
                value="creditCard"
                checked={paymentOption === "creditCard"}
                onChange={handlePaymentOptionChange}
              />
              Credit Card 💳
            </label>
            <label>
              <input
                type="radio"
                name="paymentOption"
                value="phone pay"
                checked={paymentOption === "phone pay"}
                onChange={handlePaymentOptionChange}
              />
              Phone Pay 📱
            </label>
          </div>
          {paymentOption && (
            <div className="pin-input">
              <label>
                Enter PIN 🔐:
                <input
                  type="password"
                  value={pinNumber}
                  onChange={handlePinChange}
                />
              </label>
            </div>
          )}
          <button
            className="payment-button"
            onClick={handlePayment}
            disabled={!paymentOption || !pinNumber}
          >
            Pay Now 💸
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
