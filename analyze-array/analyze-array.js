export default function analyzeArray(numbersArray) {
  if (!numbersArray || !Array.isArray(numbersArray)) {
    throw new Error("Please provide an array of numbers as argument.");
  }

  let sum = 0;
  let min, max;

  for (const number of numbersArray) {
    if (typeof number !== "number") {
      throw new Error(
        "Array argument must only contain numbers, please provide an array of numbers as argument."
      );
    }

    if (!min || number < min) min = number;
    if (!max || number > max) max = number;

    sum += number;
  }

  const length = numbersArray.length;
  let average = sum / length;
  if (!Number.isInteger(average)) average = Number(average.toFixed(2));

  return { average, min, max, length };
}
