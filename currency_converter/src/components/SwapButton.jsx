import React from "react";
import { useCurrency } from "../context/CurrencyContext";

const SwapButton = () => {
  const {
    fromCurrency,
    toCurrency,
    setFromCurrency,
    setToCurrency,
  } = useCurrency();

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <button onClick={handleSwap} className="swap-btn">
      ⇄
    </button>
  );
  
};

export default SwapButton;