const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const expect = chai.expect

const {add} = require('../models/database')
const {update} = require('../models/database')
const {done} = require('../models/database')
const {list} = require('../models/database')

describe('database queries', function(done) {
  it('should return 4', function() {
    expect(2 + 2).to.equal(4)
  })

  context('list()', () => {
    it('list should be a function'), function(done) {
      expect(list).should.eventually.be.a('function')
    }

  })
})
