const chai = require('chai')
const expect = chai.expect

const {add, update, done, list, clearDatabase, seedData} = require('../models/database')

describe('database queries', function() {
  var currentIds = []
  before(function() {
    clearDatabase()
      .then(add('eat a bigMac').then((added) => {currentIds.push(added.id)}))
      .then(add('eat a salad').then((added) => {currentIds.push(added.id)}))
      .then(add('eat a McFlurry').then((added) => {currentIds.push(added.id)}))
      .catch(e => console.error(e))
  })

  context('database functions: ', () => {

    it('adds(): adds a record to db', () => {
      var string = "learn how to code"
      return add(string).then((str) => {
        expect(str.task).to.equal('learn how to code')
      })
    })

    it('list(): should list all database records', function() {
      return list()
        .then(result => {
          expect(result.length).to.equal(4)
          expect(result).to.be.an('array')
        })
    })

    it('update(): should updated database record task with specified id', function() {
      return update(currentIds[0], "munch on a whopper")
        .then(results => {
        expect(results).to.be.eql({id: results.id, task: results.task})
        expect(results).to.be.an('object')
      })
    })

    it('done(): should delete database record with a specifed id', function() {
      return done(currentIds[1])
        .then(deleted => {
        expect(deleted).to.be.eql({id: deleted.id, task: deleted.task})
        expect(deleted).to.be.an('object')
      })
    })
  })
})
