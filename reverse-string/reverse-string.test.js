import reverseString from "./reverse-string";

test("reverses strings", () => {
  expect(reverseString("Federico")).toBe("ociredeF");
  expect(reverseString("Uruguay")).toBe("yaugurU");
  expect(reverseString("Rhinoceros")).toBe("soreconihR");
});

test("reverses nothing to get an error", () => {
  expect(() => reverseString()).toThrow(Error);
});

test("reverses a non-string to get an error", () => {
  expect(() => reverseString(22)).toThrow(Error);
});
