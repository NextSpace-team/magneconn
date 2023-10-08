// In dst_now.js
export async function fetchDstNowData() {
  try {
    const response = await fetch('http://localhost:8080/api/dst/now/strength');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('DST API Response:', data); // Add this line to log the response

    return data;
  } catch (error) {
    console.error('Error fetching DST data:', error);
    throw error;
  }
}
