import axios from 'axios';
import credentials from './credentials.json';

const STOCK_API_KEY = credentials.api_key;

interface StockAPIResponse {
  data: {
    latestPrice: number
  }
}

export const getStockValue = async (stockCode: string) => {
  const GET_GME_URL = `https://cloud.iexapis.com/stable/stock/${stockCode}/quote?token=${STOCK_API_KEY}`;
  try {
    const response:StockAPIResponse = await axios.get(GET_GME_URL);
    const value = response.data.latestPrice;
    console.log(`${stockCode} stock value: ${value}`);
    return value;
  } catch(error) {
    console.error(error);
  }
}
