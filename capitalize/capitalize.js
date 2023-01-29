export default function capitalize(string) {
  if (!string || typeof string !== "string")
    throw new Error("Expected string argument");

  const uppercaseFirstCharacter = string.slice(0, 1).toUpperCase();
  const restOfCharacters = string.slice(1);
  return uppercaseFirstCharacter.concat(restOfCharacters);
}
