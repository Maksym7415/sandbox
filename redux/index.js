class Redux {

  // singletone approach realisation
  static #instance;

  // cause we are not able to make constructor private it's smth. like pollyfill for protecting this class from creating with new more than one time
  constructor(reducer) {
    if (Redux.#instance) return new Error('You are not able to create instances via new');
    this.#reducer = reducer;
  }

  static getInstance(reducer) {
    if (!Redux.#instance) {
      Redux.#instance = new Redux(reducer);
    }

    return Redux.#instance;
  }
  // --------------------------------->

  #reducer;

  createReducer(reducer) {
    this.#reducer = [reducer];
    for (let key in reducer) {
      this.#state[key] = reducer[key](undefined, {})
    }
    console.log(reducer)
  }

  #state = {}

  dispatch(key, value) {
    this.#state[key] = value;
  }

  getState() {
    return this.#state
  }
}

module.exports = {
  createStore: function createStore(reducer) {
    const store = Redux.getInstance(reducer);
    store.createReducer(reducer)
    return store;
  }
}