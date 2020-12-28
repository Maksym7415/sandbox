const { createStore } = require('./redux');
const someReducer = require('./src/redux/reducer')

const store = createStore({someReducer});
console.log(store.getState())
