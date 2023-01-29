const calculator = {
  _checkNumberArguments(numArg1, numArg2) {
    if (!numArg1 || !numArg2) throw new Error("Two number arguments expected");
  },

  add(num1, num2) {
    this._checkNumberArguments(num1, num2);
    return num1 + num2;
  },

  subtract(num1, num2) {
    this._checkNumberArguments(num1, num2);
    return num1 - num2;
  },

  divide(num1, num2) {
    this._checkNumberArguments(num1, num2);
    return num1 / num2;
  },

  multiply(num1, num2) {
    this._checkNumberArguments(num1, num2);
    return num1 * num2;
  },
};

export default calculator;
