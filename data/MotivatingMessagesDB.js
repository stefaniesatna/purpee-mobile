let motivatingMessages = [];

// newMessage takes in motivational message, and starting day (inclusive), ending day (exclusive, optional) of when it should display
export function newMessage(m, min, max = min + 1) {
  // TODO: Maybe add a catch if missing m or min
  if (typeof min !== "number" || min < 0) {
    console.log("Min needs to be a positive integer");
    return;
  }

  // If there already is a message with the same starting day, rewrite it
  motivatingMessages.forEach((mes) => {
    if (mes.min === min) {
      (mes.max = max), (mes.message = m);
      return;
    }
  });

  let message = {
    min: min,
    max: max,
    message: m,
  };
  motivatingMessages.push(message);
}

export function getMessageForDay(dayNo){
  let message = `${dayNo} straight days in ketosis 💜`;
  motivatingMessages.forEach((m) => {
    if (m.min <= dayNo && dayNo < m.max) {
      message = m.message;
      return message;
    }
  });
  return message
}
