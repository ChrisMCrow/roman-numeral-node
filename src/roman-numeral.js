var romanNumber = {
  "M": 1000,
  "CM": 900,
  "D": 500,
  "CD": 400,
  "C": 100,
  "XC": 90,
  "L": 50,
  "XL": 40,
  "X": 10,
  "IX": 9,
  "V": 5,
  "IV": 4,
  "I": 1
};

export function converter(n) {
  var roman = "";
  if (n < 1 || n > 3999) {
    roman = "Please enter a number between 1 & 3,999";
  } else {
    for (let key of Object.keys(romanNumber)) {
      var quotient = Math.floor(n/romanNumber[key]);
      n -= quotient * romanNumber[key];
      for (let j = 0; j < quotient; j++) {
        roman += key;
      }
    }
  }
  return roman;
}