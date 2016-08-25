'use strict';

const parseWeirdAPIGatewayFormat = input => {
  const sanitisedInput = input.replace(/[\{\}]/g, '');
  let output = {};
  sanitisedInput.split(/\,/).forEach((parameterPairString) => {
    const parameterPairArray = parameterPairString.trim().split(/\=/);
    output[parameterPairArray[0]] = parameterPairArray.slice(1).join('=');
  });

  return output;
};

const parseQueryParams = (input) => {
  if (typeof input === 'object') {
    return input;
  } else {
    try {
      return JSON.parse(input);
    } catch (e) {
      return parseWeirdAPIGatewayFormat(input);
    }
  }
};

export { parseQueryParams };
