const { GREETING, NAME } = require('./types');

function someReducer (state, action) {
  switch (action.type) {
    case GREETING: {
      return {
        ...state,
        greeting: action.data,
      }
    }

    case NAME: {
      return {
        ...state,
        name: action.data,
      }
    }

    default: return state;
  }
};

module.exports = someReducer;
