export const ketoneLevelsDates = {
  "2020-12-27": Math.floor(Math.random() * 7),
  "2020-12-28": Math.floor(Math.random() * 7),
  "2020-12-29": Math.floor(Math.random() * 7),
  "2020-12-30": Math.floor(Math.random() * 7),
  "2020-12-31": Math.floor(Math.random() * 7),
  "2021-01-01": Math.floor(Math.random() * 7),
  "2021-01-02": Math.floor(Math.random() * 7),
  "2021-01-03": Math.floor(Math.random() * 7),
  "2021-01-04": Math.floor(Math.random() * 7),
  "2021-01-05": Math.floor(Math.random() * 7),
  "2021-01-06": Math.floor(Math.random() * 7),
  "2021-01-07": Math.floor(Math.random() * 7),
  "2021-01-08": Math.floor(Math.random() * 7),
  "2021-01-09": Math.floor(Math.random() * 7),
  "2021-01-10": Math.floor(Math.random() * 7),
  "2021-01-11": Math.floor(Math.random() * 7),
  "2021-01-12": Math.floor(Math.random() * 7),
  "2021-01-13": Math.floor(Math.random() * 7),
  "2021-01-14": Math.floor(Math.random() * 7),
  "2021-01-15": Math.floor(Math.random() * 7),
  "2021-01-16": Math.floor(Math.random() * 7),
  "2021-01-17": Math.floor(Math.random() * 7),
  "2021-01-18": Math.floor(Math.random() * 7),
  "2021-01-19": Math.floor(Math.random() * 7),
  "2021-01-20": Math.floor(Math.random() * 7),
  "2021-01-21": Math.floor(Math.random() * 7),
  "2021-01-22": Math.floor(Math.random() * 7),
  "2021-01-23": Math.floor(Math.random() * 7),
  "2021-01-24": Math.floor(Math.random() * 7),
  "2021-01-25": Math.floor(Math.random() * 7),
  "2021-01-26": Math.floor(Math.random() * 7),
  "2021-01-27": Math.floor(Math.random() * 7),
  "2021-01-28": Math.floor(Math.random() * 7),
  "2021-01-29": Math.floor(Math.random() * 7),
  "2021-01-30": Math.floor(Math.random() * 7),
  "2021-01-31": Math.floor(Math.random() * 7),
  "2021-02-01": Math.floor(Math.random() * 7),
  "2021-02-02": Math.floor(Math.random() * 7),
  "2021-02-03": Math.floor(Math.random() * 7),
  "2021-02-04": Math.floor(Math.random() * 7),
  "2021-02-05": Math.floor(Math.random() * 7),
  "2021-02-06": Math.floor(Math.random() * 7),
  "2021-02-07": Math.floor(Math.random() * 7),
  "2021-02-08": Math.floor(Math.random() * 7),
  "2021-02-09": Math.floor(Math.random() * 7),
  "2021-02-10": Math.floor(Math.random() * 7),
  "2021-02-11": Math.floor(Math.random() * 7),
  "2021-02-12": Math.floor(Math.random() * 7),
  "2021-02-13": Math.floor(Math.random() * 7),
  "2021-02-14": Math.floor(Math.random() * 7),
  "2021-02-15": Math.floor(Math.random() * 7),
  "2021-02-16": Math.floor(Math.random() * 7),
  "2021-02-17": Math.floor(Math.random() * 7),
  "2021-02-18": Math.floor(Math.random() * 7),
  "2021-02-19": Math.floor(Math.random() * 7),
  "2021-02-20": Math.floor(Math.random() * 7),
  "2021-02-21": Math.floor(Math.random() * 7),
  "2021-02-22": Math.floor(Math.random() * 7),
  "2021-02-23": Math.floor(Math.random() * 7),
  "2021-02-24": Math.floor(Math.random() * 7),
  "2021-02-25": Math.floor(Math.random() * 7),
  "2021-02-26": Math.floor(Math.random() * 7),
  "2021-02-27": Math.floor(Math.random() * 7),
  "2021-02-28": Math.floor(Math.random() * 7),
  "2021-03-01": Math.floor(Math.random() * 7),
  "2021-03-02": Math.floor(Math.random() * 7),
  "2021-03-03": Math.floor(Math.random() * 7),
  "2021-03-04": Math.floor(Math.random() * 7),
  "2021-03-05": Math.floor(Math.random() * 7),
  "2021-03-06": Math.floor(Math.random() * 7),
  "2021-03-07": Math.floor(Math.random() * 7),
  "2021-03-08": Math.floor(Math.random() * 7),
  "2021-03-09": Math.floor(Math.random() * 7),
  "2021-03-10": Math.floor(Math.random() * 7),
  "2021-03-11": Math.floor(Math.random() * 7),
  "2021-03-12": Math.floor(Math.random() * 7),
  "2021-03-13": Math.floor(Math.random() * 7),
  "2021-03-14": Math.floor(Math.random() * 7),
  "2021-03-15": Math.floor(Math.random() * 7),
};

export const ketoneLevels = generateKetoneLevelsWeeks();
export const daysInKetosis = calculateDaysKeto();

export function shortenDate(day) {
  let dd = String(day.getDate()).padStart(2, "0");
  let mm = String(day.getMonth() + 1).padStart(2, "0");
  let yyyy = day.getFullYear();

  dateShortened = yyyy + "-" + mm + "-" + dd;
  return dateShortened;
}

export function calculateDaysKeto() {
  let day = new Date(); // start with today
  let totalDaysKeto = 0;
  while (ketoneLevelsDates[shortenDate(day)] > 1) {
    totalDaysKeto++;
    day.setDate(day.getDate() - 1); // subtract a day
  }
  return totalDaysKeto;
}

export function generateKetoneLevelsWeeks() {
  const today = new Date();
  const numOfWeeks = 8;

  // n-1 weeks times 7 days plus index of this day (Thursday is 4th day of the week => +4)
  let daysTotal = (numOfWeeks - 1) * 7 + today.getDay();
  let day = today;

  /* today minus total days should give the day prior the first day of the total days. We want 
    want to start on the first day, so we add one */
  day.setDate(day.getDate() - daysTotal + 1);

  let weeks = [];
  let week = [];

  /* Create a multidimensional array containing weeks (heatmap rows) and days (heatmap squares). 
    The value of each day in a week is representing the ketone level logged for the day */
  for (let i = 1; i <= daysTotal; i++) {
    week.push(ketoneLevelsDates[shortenDate(day)]);
    if (i % 7 === 0 || i === daysTotal) {
      weeks.push([...week]);
      week = [];
    }
    day.setDate(day.getDate() + 1);
  }
  return weeks;
}
