import React from "react";

const ExchangeRate = ({ rate, from, to }) => {
    
  return (
    <p className="rate">
      1 {from} = {rate.toFixed(2)} {to}
    </p>
  );
};

export default ExchangeRate;