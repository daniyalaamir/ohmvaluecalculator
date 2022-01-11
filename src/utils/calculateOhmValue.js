const calculateOhmValue = (firstDigit = 0, secondDigit = 0, multiplier = 1) => {
  return (firstDigit * 10 + secondDigit) * multiplier;
};

const getOhmString = (ohms) => {
  let suffix = "Ω";
  if (ohms / 1e9 >= 1) {
    suffix = "GΩ";
    ohms = ohms / 1e9;
  }
  if (ohms / 1e6 >= 1) {
    suffix = "MΩ";
    ohms = ohms / 1e6;
  } else if (ohms / 1e3 >= 1) {
    suffix = "KΩ";
    ohms = ohms / 1e3;
  }
  return ohms + suffix;
};

export { getOhmString, calculateOhmValue };
