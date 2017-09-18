const axios = require('axios')
const apiConfig = require('../config/api')

module.exports = {
  getComments() {
    return axios.get(apiConfig.commentsUrl)
  }
}
