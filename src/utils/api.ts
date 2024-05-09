const BASE_URL = "http://localhost:3000"
export const fetchData = async (limit: number = 20): Promise<Stocks | void> => {
  try {
    const response = await fetch(`${BASE_URL}/stocks?_limit=${limit}`);
    
    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem("stockData", JSON.stringify(data));
      return data;
    }  
  } catch (error) {
    console.error("error occurred:", error);
    const storedData = localStorage.getItem("stockData");
    if (storedData) {
      console.log("Using data from localStorage:", storedData);
      return JSON.parse(storedData)
    } else {
      throw new Error('No data found in localStorage')
    }
  }
};
