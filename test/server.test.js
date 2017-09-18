const chai = require('chai')
const mockHttp = require('chai-http')
const server = require('../app')

const should = chai.should()

chai.use(mockHttp)

describe('routes:root', () => {
  describe('get: / ', () => {
    it('should return json', done => {
      chai.request(server).get('/').end((err, res) => {
        should.not.exist(err)
        res.status.should.eql(200)
        res.type.should.eql('application/json')
        done()
      })
    })
  })
})
