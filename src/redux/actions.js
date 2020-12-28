const { SOME_TYPE } = require('./types')

function someAction (data, name) {
  return {
    type: SOME_TYPE,
    name,
    data
  }
}

module.exports = {
  someAction
}