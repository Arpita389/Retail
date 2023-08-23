import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./payment.css";
import Submit from "../login/submit";

const Payment = () => {
  const [paymentOption, setPaymentOption] = useState("");
  const [pinNumber, setPinNumber] = useState("");
  const [pinValid, setPinValid] = useState(true);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const totalPrice =
      parseFloat(location.state.price) * location.state.quantity;
    setAmount(totalPrice);
  }, [location.state]);
  let totalPrice = parseFloat(location.state.price) * location.state.quantity;

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  const handlePinChange = (event) => {
    const newPin = event.target.value;
    setPinNumber(newPin);
    setPinValid(newPin.length === 6);
  };

  const handleAmountChange = (event) => {
    const newAmount = parseFloat(event.target.value);
    setAmount(newAmount);
  };

  const handlePayment = () => {
    if (pinValid) {
      setTimeout(() => {
        if (amount <= totalPrice) {
          setPaymentSuccess(true);
          if (amount < totalPrice) {
            const remainingAmount = totalPrice - amount;
            alert(
              `Payment successful! 🎉💰\nRemaining amount: $${remainingAmount} you can pay this by cash on delivery process otherwise you will not get the product `
            );
          } else {
            alert("Payment successful! 🎉💰");
          }
          navigate("../login/submit");
        } else {
          alert("Amount exceeds total price! 💸");
        }
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
                value="phonePay"
                checked={paymentOption === "phonePay"}
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
                  className={pinValid ? "pin-input-valid" : "pin-input-invalid"}
                  type="password"
                  value={pinNumber}
                  onChange={handlePinChange}
                />
              </label>
              {!pinValid && (
                <p className="pin-validation-error">
                  PIN should be a 6 digit number 🔢
                </p>
              )}
            </div>
          )}
          <div className="amount-input">
            <label>
              Enter Amount:
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                min="0"
                max={totalPrice}
              />
            </label>
            {amount > totalPrice && (
              <p className="amount-validation-error">
                Amount exceeds total price! 💸
              </p>
            )}
          </div>
          <button
            className="payment-button"
            onClick={handlePayment}
            disabled={!paymentOption || !pinNumber || !pinValid || amount <= 0}
          >
            Pay Now 💸
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
