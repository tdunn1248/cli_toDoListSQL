const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const expect = chai.expect

const {add} = require('../models/database')
const {update} = require('../models/database')
const {done} = require('../models/database')
const {list} = require('../models/database')

describe('database queries', function(done) {
  context('list()', () => {
    it('list should be a function'), function(done) {
      list().then(results => {
        expect(results).should.eventually.be.an('object')
      })
    }
  })
})
