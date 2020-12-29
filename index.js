const { createStore, dispatch } = require('./redux');
const someReducer = require('./src/redux/reducer');
const { greetingAction, nameAction } = require('./src/redux/actions');

const store = createStore({someReducer});
// dispatch(greetingAction('hello'))
// dispatch(nameAction('Maksym'))


console.log(store.getState());

