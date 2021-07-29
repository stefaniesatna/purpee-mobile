// Maybe split this in two functions to make it more generic
export const levelDatesToCSV = data => {
  // Sort dates descending
  const dates = Object.keys(data);
  const sortedDates = dates.sort((a, b) => {
    return new Date(b) - new Date(a);
  });

  // Construct CSV
  const csv = sortedDates
    .map((date) => {
      return `${date},${data[date]}`;
    })
    .join("\n");
  
  return csv;
};