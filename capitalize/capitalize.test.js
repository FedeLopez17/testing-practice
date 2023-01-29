import capitalize from "./capitalize";

test("capitalizes strings' first characters", () => {
  expect(capitalize("cat")).toBe("Cat");
  expect(capitalize("pterodactyl")).toBe("Pterodactyl");
});

test("capitalizes nothing to get an error", () => {
  expect(() => capitalize()).toThrow(Error);
});

test("capitalizes a non-string to get an error", () => {
  expect(() => capitalize(16)).toThrow(Error);
});
