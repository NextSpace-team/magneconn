import { fetchDataFromApi } from './core';

export const fetchBzNowData = async () => {
  try {
    const response = await fetchDataFromApi('http://localhost:8080/api/bz/now/strength');
    console.log('API Response:', response);
    if (response.data) {
      return { data: response.data.bz, stormStrength: response.data.stormStrength };
    } else {
      return { data: "N/A", stormStrength: "N/A" };
    }
  } catch (error) {
    console.error('Error fetching Bz data:', error);
    throw error;
  }
};
