import { calculateOhmValue, getOhmString } from "../calculateOhmValue";
import multiplier from "../maps/multiplier";
import significantDigits from "../maps/significantDigits";

describe("calculateOhmValue", () => {
  it("should return a value when band A is provided", () => {
    const bandA = significantDigits.yellow.value;
    let result = calculateOhmValue(bandA);
    expect(result).toEqual(bandA * 10);
  });

  it("should return a value when band B is provided", () => {
    let result = calculateOhmValue(0, significantDigits.yellow.value);
    expect(result).toEqual(significantDigits.yellow.value);
  });

  it("should multiply the value based on the multiplier", () => {
    const bandB = 1;
    const multiplierValue = multiplier["brown"].value;
    let result = calculateOhmValue(0, bandB, multiplierValue);
    expect(result).toEqual(multiplierValue);
  });

  it("should return a zero value if bands A and B are black", () => {
    const multiplierValue = multiplier["brown"].value;
    let result = calculateOhmValue(significantDigits.black.value, significantDigits.black.value, multiplierValue);
    expect(result).toBe(0);
  });
});

describe("getOhmString", () => {
  it("should not apply suffix is value is less than 1000", () => {
    let result = getOhmString(999);
    expect(result).toEqual("999Ω");
  });
  it("should apply KΩ suffix is value is greater than 1000", () => {
    let result = getOhmString(1e3);
    expect(result).toEqual("1KΩ");
  });
  it("should apply MΩ suffix is value is greater than 1000000", () => {
    let result = getOhmString(1e6);
    expect(result).toEqual("1MΩ");
  });
  it("should apply GΩ suffix is value is greater than 1000000000", () => {
    let result = getOhmString(1e9);
    expect(result).toEqual("1GΩ");
  });
});
