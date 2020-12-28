const { someAction } = require('./actions');
const { SOME_TYPE } = require('./types');

function someReducer (state = {a: 2}, action) {
  switch (action.type) {
    case SOME_TYPE: {
      return {
        [action.name]: action.data
      }
    }

    default: return state;
  }
};

module.exports = someReducer;
