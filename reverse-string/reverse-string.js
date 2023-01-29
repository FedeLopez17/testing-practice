export default function reverseString(string) {
  if (!string || typeof string !== "string")
    throw new Error("Expected string argument");

  let reversedString = "";

  for (const char of string) {
    reversedString = char + reversedString;
  }

  return reversedString;
}
