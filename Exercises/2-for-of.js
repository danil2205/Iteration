'use strict';

const sum = (...args) => {
  let value = 0;
  for (const i of args) value += i;
  return value;
};

module.exports = { sum };
