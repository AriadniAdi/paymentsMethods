var assert = require('assert');
const Test = require('../validators/test.js')

describe('Test', function() {

  describe('#jsonValidator', function() {
    context('when an invalid json is provided', function() {
     it('Check for data json', function() {
        const repository = new Test('../test/resources/invalidData.json');
        assert.equal(repository.jsonValidator().length, 0)
        });
    });
  });
});