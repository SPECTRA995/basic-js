const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(array) {
  let arrString = [];
  let teamName = [];
  let teamNameUpper = [];
  if (typeof array !== Boolean && typeof array !== Number && array !== null && array !== undefined && array !== {}) {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] == 'string' && array.length !== 0) {
       arrString.push(array[i].trim());
      }
    }
    for (let j = 0; j < arrString.length; j++) {
      teamName.push(arrString[j][0].toUpperCase()); 
    } 
    teamNameUpper.push(teamName.sort().join(''));
    return teamNameUpper;
  } else {
    return false;
    }
}

module.exports = {
  createDreamTeam
};
