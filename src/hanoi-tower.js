const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function calculateHanoi(disks, turnsSpeed) {
   let obj = {};
   let point = 0.0002777777777777777;
   let turn = Math.pow(2, disks) - 1;
   let seconds = turnsSpeed * point;
   let result = Math.floor(turn/seconds);

   obj["turns"] = turn;
   obj["seconds"] = result;

   return obj;

}

module.exports = {
  calculateHanoi
};
