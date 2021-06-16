export const formatDateYYYYMMDD = (day) => {
  let dd = String(day.getDate()).padStart(2, "0");
  let mm = String(day.getMonth() + 1).padStart(2, "0");
  let yyyy = day.getFullYear();

  let dateFormated = yyyy + "-" + mm + "-" + dd;
  return dateFormated;
};
