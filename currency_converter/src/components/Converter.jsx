import React, { useEffect, useMemo, useState } from "react";
import { fetchRates } from "../services/api";
import { useCurrency } from "../context/CurrencyContext";
import CurrencySelector from "./CurrencySelector";
import ExchangeRate from "./ExchangeRate";
import SwapButton from "./SwapButton";

const Converter = () => {
  const { fromCurrency, toCurrency, amount, setAmount } = useCurrency();

  const [rates, setRates] = useState({});
  const [error, setError] = useState(null);

  // Fetch data + auto refresh
  useEffect(() => {
    let interval;

    const getRates = async () => {
      try {
        const data = await fetchRates(fromCurrency);
        setRates(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch exchange rates");
      }
    };

    getRates();
    interval = setInterval(getRates, 30000);

    return () => clearInterval(interval);
  }, [fromCurrency]);

  // Optimized calculation
  const convertedAmount = useMemo(() => {
    if (!rates[toCurrency]) return 0;
    return (amount * rates[toCurrency]).toFixed(2);
  }, [amount, rates, toCurrency]);

  const currencyList = Object.keys(rates);

  return (
    <div className="card">
      <h2>💱 Currency Converter</h2>

      {error && <p className="error">{error}</p>}


      <div className="row">
        <CurrencySelector type="from" currencies={currencyList} />
        <SwapButton />
        <CurrencySelector type="to" currencies={currencyList} />
      </div>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="input"
      />

      <h3 className="result">{convertedAmount}</h3>

      {rates[toCurrency] && (
        <ExchangeRate
          rate={rates[toCurrency]}
          from={fromCurrency}
          to={toCurrency}
        />
      )}
    </div>
  );
};

export default Converter;