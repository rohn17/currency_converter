import React from "react";
import { useCurrency } from "../context/CurrencyContext";

const CurrencySelector = ({ type, currencies }) => {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
  } = useCurrency();

  const handleChange = (e) => {
    if (type === "from") {
      setFromCurrency(e.target.value);
    } else {
      setToCurrency(e.target.value);
    }
  };

  return (
    <select
      value={type === "from" ? fromCurrency : toCurrency}
      onChange={handleChange}
      className="dropdown"
    >
      {currencies.map((cur) => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </select>
  );
};

export default React.memo(CurrencySelector);