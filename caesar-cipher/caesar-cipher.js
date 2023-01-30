// Added this function because of this: https://web.archive.org/web/20090717035140if_/javascript.about.com/od/problemsolving/a/modulobug.htm
function mod(num1, num2) {
  return ((num1 % num2) + num2) % num2;
}

function isLowerCaseLetter(char) {
  const charCode = char.charCodeAt(0);
  return charCode > 96 && charCode < 123;
}

function isUpperCaseLetter(char) {
  const charCode = char.charCodeAt(0);
  return charCode > 64 && charCode < 91;
}

function notALetter(char) {
  return isLowerCaseLetter(char) || isUpperCaseLetter(char) ? false : true;
}

export default function caesarCipher(string, shiftFactor) {
  if (
    !string ||
    typeof string !== "string" ||
    !shiftFactor ||
    typeof shiftFactor !== "number"
  )
    throw new Error(
      "Invalid arguments, please provide a string and a numerical shift factor."
    );

  let shiftedString = "";

  for (const char of string) {
    if (notALetter(char)) {
      shiftedString += char;
      continue;
    }

    const charCode = char.charCodeAt(0);
    let shiftedChar;

    if (isLowerCaseLetter(char)) {
      const shiftedCharCode = mod(charCode - 97 + shiftFactor, 26) + 97;
      shiftedChar = String.fromCharCode(shiftedCharCode);
    }

    if (isUpperCaseLetter(char)) {
      const shiftedCharCode = mod(charCode - 65 + shiftFactor, 26) + 65;
      shiftedChar = String.fromCharCode(shiftedCharCode);
    }

    shiftedString += shiftedChar;
  }

  return shiftedString;
}
