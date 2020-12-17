function* foo() {
  yield console.log(1)
  yield console.log(2)
  yield console.log(3)
  yield console.log(4)
}

let it = foo();
console.log(it.next().done)
console.log(it.next().done)
console.log(it.next().done)
console.log(it.next().done)
console.log(it.next().done)

