export const degreesToTime = (deg) => {
  const fiveMinsInterval = Math.floor((deg / 2.5) * 2);
  let mins = fiveMinsInterval * 5;
  const hours = Math.floor(mins / 60);
  mins -= hours * 60;

  return {
    hours: hours,
    mins: mins,
  };
};
