const chai = require('chai')
const mockHttp = require('chai-http')
const sinon = require('sinon')
const server = require('../app')
const api = require('../api/api')

const should = chai.should()

chai.use(mockHttp)

const comments = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body:
      'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium'
  }
]
sinon.stub(api, 'getComments').returns(Promise.resolve(comments))

describe('routes:api:comments', () => {
  describe('GET /comments', () => {
    it('should return some comments', done => {
      chai.request(server).get('/comments').end((err, res) => {
        should.not.exist(err)
        res.status.should.eql(200)
        res.body.comments.length.should.eql(1)
        res.body.comments[0].should.eql(comments[0])
        done()
      })
    })
  })
})
