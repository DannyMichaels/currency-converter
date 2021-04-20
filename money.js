const convertToCurrency = (numberToConvert) => {
  let result = '';

  let numString = numberToConvert.toString().replace('-', '');

  if (numberToConvert < 0) {
    result = result.concat('-');
  }

  result = result.concat('$').concat(Math.abs(numberToConvert));
  // result = result.concat('$').concat(numberToConvert.toFixed(2));

  if (numString.length === 2) {
    result = result.concat('.00');
  }

  console.log({ result });
  return result;
};

convertToCurrency(8.33);
convertToCurrency(-10.36);
