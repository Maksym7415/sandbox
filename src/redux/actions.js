const { GREETING, NAME } = require('./types')

function greetingAction (data) {
  return {
    type: GREETING,
    data
  }
}

function nameAction (data) {
  return {
    type: NAME,
    data
  }
}

module.exports = {
  greetingAction,
  nameAction
}