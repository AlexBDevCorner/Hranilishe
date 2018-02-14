const _ = require('lodash');

const getMaxFromArray = (arr) => _.max(arr);

const amIFat = (weight) => weight > 99 ? "yes!" : "no!";

module.exports = {
  getMaxFromArray,
  amIFat
};
