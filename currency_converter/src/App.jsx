import React from "react";
import Converter from "./components/Converter";
import { CurrencyProvider } from "./context/CurrencyContext";
import "./App.css";

function App() {
  return (
    <CurrencyProvider>
      <div className="app">
        <Converter />
      </div>
    </CurrencyProvider>
  );
}

export default App;