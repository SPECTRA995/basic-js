const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const regex = /([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const result = email.match(regex);
  return result[0];
}

module.exports = {
  getEmailDomain
};
