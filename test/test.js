const assert = require('assert');
const sample = require('../lib/test-project');

describe('test module', function () {
  describe('execution', function () {
    it('Should return valid value for X', function () {
      assert.equal(sample.test(2, 3)(100), 203);
    });
  });
});