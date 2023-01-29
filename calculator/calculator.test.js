import calculator from "./calculator";

test("addition", () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(-10, 20)).toBe(10);
  expect(calculator.add(1.5, 3.8)).toBeCloseTo(5.3);
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("subtraction", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(2, 10)).toBe(-8);
  expect(calculator.subtract(47, 13)).toBe(34);
  expect(calculator.subtract(15.3, 5.4)).toBeCloseTo(9.9);
});

test("division", () => {
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.divide(10, 4)).toBeCloseTo(2.5);
  expect(calculator.divide(13479, 7)).toBeCloseTo(1925.57);
  expect(calculator.divide(10, 3)).toBeCloseTo(3.33);
});

test("multiplication", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.multiply(-10, 3)).toBe(-30);
  expect(calculator.multiply(9.3, 7)).toBeCloseTo(65.1);
  expect(calculator.multiply(0.25, 3)).toBeCloseTo(0.75);
});

test("Don't provide number arguments to get an error", () => {
  expect(() => calculator.add()).toThrow(Error);
  expect(() => calculator.subtract()).toThrow(Error);
  expect(() => calculator.divide()).toThrow(Error);
  expect(() => calculator.multiply()).toThrow(Error);
});
