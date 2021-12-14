'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  let value = 0;
  let i = 0;
  do {
    value += args[i++];
  } while (i < args.length);
  return value;
};

module.exports = { sum };
