import { formatDateYYYYMMDD } from "./formatDateYYYYMMDD"

// Generates multidimensional array of weeks with dates, n weeks back, including current week
export function generateArrayOfWeeks(numOfWeeks) {
  const today = new Date();

  // n-1 weeks times 7 days plus index of this day (Thursday is 4th day of the week => +4)
  let daysTotal = (numOfWeeks - 1) * 7 + today.getDay();
  let day = today;

  /* today minus total days should give the day prior the first day of the total days. We want 
      want to start on the first day, so we add one */
  day.setDate(day.getDate() - daysTotal + 1);

  let weeks = [];
  let week = [];

  /* Create a multidimensional array containing weeks (heatmap rows) and days (heatmap squares). 
      Each day of the week is represented as a date yyyy-mm-dd */
  for (let i = 1; i <= daysTotal; i++) {
    week.push(formatDateYYYYMMDD(day));
    if (i % 7 === 0 || i === daysTotal) {
      weeks.push([...week]);
      week = [];
    }
    day.setDate(day.getDate() + 1);
  }
  return weeks;
}
