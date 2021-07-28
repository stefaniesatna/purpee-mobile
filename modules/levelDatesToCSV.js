export const levelDatesToCSV = (jsonData) => {
  // Sort dates descending
  const data = JSON.parse(jsonData);
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
