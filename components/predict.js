import { fetchDataFromApi } from './core';

export const fetchPredictData = async () => {
  try {
    const response = await fetchDataFromApi('http://localhost:8080/api/predict/6h');
    console.log('API Response:', response);
    if (response.data) {
      return { data: response.data.dst, stormStrength: response.data.stormStrength };
    } else {
      return { data: "N/A", stormStrength: "N/A" };
    }
  } catch (error) {
    console.error('Error fetching prediction data:', error);
    throw error;
  }
};
