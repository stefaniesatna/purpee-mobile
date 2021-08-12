// Maybe split this in two functions to make it more generic
export const levelDatesToCSV = (data) => {
  // Sort dates descending
  const dates = Object.keys(data);
  const sortedDates = dates.sort((a, b) => {
    return new Date(b) - new Date(a);
  });

  // Construct CSV
  /* whilst internally I'm using the scale of 0-6, 0 representing the absence of log, the user
  won't see in csv the absence of log, therefore they'll never have a date with 0, therefore it 
  makes sense to move the scale down -1 and therefore 0 will represent on csv "logged, but not in
  ketosis. Scale will therefore be 0-5 */
  const header = `date, ketosis_level_(0-5)`;
  const csvData = sortedDates
    .map((date) => {
      return `${date},${data[date] - 1}`;
    })
    .join("\n");
  const csv = `${header}\n${csvData}`;
  return csv;
};
