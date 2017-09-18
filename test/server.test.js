const chai = require('chai')
const mockHttp = require('chai-http')
const server = require('../server')

const should = chai.should()

chai.use(mockHttp)

describe('routes:root', () => {
  describe('get: / ', () => {
    const app = server.listen(3000)
    it('should return json', done => {
      chai.request(app).get('/').end((err, res) => {
        should.not.exist(err)
        res.status.should.eql(200)
        res.type.should.eql('application/json')
        done()
      })
    })
  })
})
