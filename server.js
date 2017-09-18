const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const api = require('./api/api')

router.get('/', async ctx => {
  ctx.body = {
    name: 'Demo CD',
    version: 1
  }
})

router.get('/comments', async ctx => {
  const comments = await api.getComments()
  ctx.body = {
    comments
  }
})

app.use(router.routes())

module.exports = app