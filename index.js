const axios = require('axios');
let a = 20
function foo() {
  console.log(global)
  return this.a
}

function main() {
  let a = 10
  console.log(foo())
}

let obj = {a: 39}

foo()