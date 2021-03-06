const app = require('./server')
const config = require('./config/server')

const port = config.port

const server = app
  .listen(Number(port), () =>
    console.log(`Running on http://localhost:${port}`)
  )
  .on('err', console.error)

module.exports = server
