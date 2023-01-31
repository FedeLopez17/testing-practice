import analyzeArray from "./analyze-array";

test("Analyze numbers arrays", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  expect(analyzeArray([-15, 3, 25, 5, 0, -2, 7])).toEqual({
    average: 3.29,
    min: -15,
    max: 25,
    length: 7,
  });

  expect(analyzeArray([1, -1.9, 77, -1037, 66.5, -21, -34, 0, -0.1])).toEqual({
    average: -105.5,
    min: -1037,
    max: 77,
    length: 9,
  });
});

test("Provide incorrect arguments to get errors", () => {
  expect(() => analyzeArray(null)).toThrow(Error);
  expect(() => analyzeArray([1, 5, -10, "Hello!", 3])).toThrow(Error);
});
