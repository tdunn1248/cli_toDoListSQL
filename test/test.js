const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect

const {add, update, done, list, clearDatabase, seedData} = require('../models/database')

describe('database queries', function() {
  before(function(done) {
    clearDatabase()
      .then(add('eat a bigMac'))
      .then(add('eat a salad'))
      .then(add('eat a McFlurry'))
      .catch(e => console.log(e))
      done()
  })

  context('database functions: ', () => {

    it('adds(): adds a record to db', () => {
      var string = "learn how to code"
      return add(string).then((str) => {
        expect(str.task).to.equal('learn how to code')
      })
    })

    it('list(): should list all database records', function(done) {
      return list()
        .then(result => {
          expect(result).to.equal(4)
          done()
        })
    })
  })
})
