import { faker } from '@faker-js/faker';

export function getDaysInCurrentMonth() {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  return Array.from({ length: currentDay }, (_, i) => i + 1);
}

export function getDaysInPreviousMonth() {
  const currentDate = new Date();
  const firstDayOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const previousMonthLastDay = new Date(firstDayOfCurrentMonth - 1);
  const daysInPreviousMonth = new Date(previousMonthLastDay.getFullYear(), previousMonthLastDay.getMonth() + 1, 0).getDate();

  return Array.from({ length: daysInPreviousMonth }, (_, i) => i + 1);
}

export async function fetchDataFromApi(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('network response was not ok');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('error fetching data:', error);
    throw error;
  }
}

export function getLast3DaysInMinutesArray() {
  const minutesArray = [];
  const now = new Date();

  for (let i = 0; i < 4320; i++) {
    const time = new Date(now - i * 60 * 1000);
    const formattedHour = time.getHours().toString().padStart(2, '0');
    const formattedMinute = time.getMinutes().toString().padStart(2, '0');
    minutesArray.push(`${formattedHour}:${formattedMinute}`);
  }

  return minutesArray;
}

export function getLast24HoursInMinutesArray() {
  const minutesArray = [];
  const now = new Date();

  for (let i = 0; i < 1440; i++) {
    const time = new Date(now - i * 60 * 1000);
    const formattedHour = time.getHours().toString().padStart(2, '0');
    const formattedMinute = time.getMinutes().toString().padStart(2, '0');
    minutesArray.push(`${formattedHour}:${formattedMinute}`);
  }

  return minutesArray;
}

export function getHoursInLastThreeDays() {
  const hours = [];
  const days = 3;

  for (let day = 0; day < days; day++) {
    for (let hour = 0; hour < 24; hour++) {
      const formattedHour = hour.toString().padStart(2, '0');
      hours.push(`${formattedHour}:00`);
    }
  }

  return hours;
}

export function getLast24H() {
  const hours = Array.from({ length: 24 }, (_, i) => {
    const formattedHour = i.toString().padStart(2, '0');
    return `${formattedHour}:00`;
  });
  return hours;
}

export function getLast5MinutesInSeconds() {
  const secondsArray = [];
  const now = new Date();
  const fiveMinutesAgo = new Date(now - 5 * 60 * 1000);

  for (let time = fiveMinutesAgo; time <= now; time.setSeconds(time.getSeconds() + 1)) {
    const formattedHour = time.getHours().toString().padStart(2, '0');
    const formattedMinute = time.getMinutes().toString().padStart(2, '0');
    const formattedSecond = time.getSeconds().toString().padStart(2, '0');
    secondsArray.push(`${formattedHour}:${formattedMinute}:${formattedSecond}`);
  }

  return secondsArray;
}

export function getLast7DaysInHours() {
  const hours = [];
  const days = 7;

  for (let day = 0; day < days; day++) {
    for (let hour = 0; hour < 24; hour++) {
      const formattedHour = hour.toString().padStart(2, '0');
      hours.push(`${formattedHour}:00`);
    }
  }

  return hours;
}

export function getLastSixHours() {
  const times = [];
  const now = new Date();

  for (let hour = 6; hour >= 1; hour--) {
    for (let minute = 59; minute >= 0; minute--) {
      const time = new Date(now);
      time.setHours(now.getHours() - hour, 59 - minute);
      const formattedHour = time.getHours().toString().padStart(2, '0');
      const formattedMinute = time.getMinutes().toString().padStart(2, '0');
      times.push(`${formattedHour}:${formattedMinute}`);
    }
  }

  return times;
}


export function getLast2HoursInMinutes() {
  const minutesArray = [];
  const now = new Date();

  for (let i = 0; i < 120; i++) {
    const time = new Date(now - i * 60 * 1000);
    const formattedHour = time.getHours().toString().padStart(2, '0');
    const formattedMinute = time.getMinutes().toString().padStart(2, '0');
    minutesArray.push(`${formattedHour}:${formattedMinute}`);
  }

  return minutesArray;
}

export function getOneDayPredictLabels() {
  const labels = ["00:00", "06:00", "12:00", "18:00", "00:00"]
  return labels;
}

export function getLastFiveMinutes() {
  const now = new Date();
  const minutesArray = [];

  for (let i = 4; i >= 0; i--) {
    const pastTime = new Date(now.getTime() - i * 60 * 1000);
    const hours = pastTime.getHours().toString().padStart(2, '0');
    const minutes = pastTime.getMinutes().toString().padStart(2, '0');
    minutesArray.push(`${hours}:${minutes}`);
  }

  return minutesArray;
}

export function getLastSevenDays() {
  const days = [];
  const now = new Date();

  for (let i = 6; i >= 0; i--) {
    const day = new Date(now);
    day.setDate(now.getDate() - i);
    const formattedDay = day.getDate().toString().padStart(2, '0');
    const formattedMonth = (day.getMonth() + 1).toString().padStart(2, '0');
    const formattedYear = day.getFullYear();
    days.push(`${formattedYear}-${formattedMonth}-${formattedDay}`);
  }

  return days;
}

// for testing purposes only
export function generateFakeData() {
  const fakeData = labels.map(() => ({
    label: '',
    value: faker.number.int({ min: -300, max: 0 }),
  }));
  return {
    labels,
    datasets: [
      {
        label: '',
        data: fakeData.map((item) => item.value),
        borderColor: 'rgb(255, 93, 23)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
}
