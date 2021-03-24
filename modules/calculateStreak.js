import { formatDateYYYYMMDD } from "./formatDateYYYYMMDD" 

export const calculateStreak = dates => {
  let day = new Date(); // start with today
  let streak = 0;
  while (dates[formatDateYYYYMMDD(day)] > 1) {
    streak++;
    day.setDate(day.getDate() - 1); // subtract a day
  }
  return streak;
}
