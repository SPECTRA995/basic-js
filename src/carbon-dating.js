const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(value) {
   let numb = Number(value);
   let k;
   let t;
   if (!+value || value.length === 0 || +value >= 15 || +value < 0 || typeof value !== 'string') {
     return false;
   } else {
     k = 0.693 / HALF_LIFE_PERIOD;
     t = Math.ceil((Math.log(MODERN_ACTIVITY/numb)) / k);
     return t;
   }
}

module.exports = {
  dateSample
};
