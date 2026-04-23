const BASE_URL = "https://open.er-api.com/v6/latest";

export const fetchRates = async (baseCurrency) => {
  try {
    const response = await fetch(`${BASE_URL}/${baseCurrency}`);
    const data = await response.json();

    if (data.result !== "success") {
      throw new Error("API Error");
    }

    return data.rates;
  } catch (error) {
    throw error;
  }
};