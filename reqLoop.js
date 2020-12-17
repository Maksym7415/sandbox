const axios = require('axios');

let requests = 0
let error = 0;
let counter = 0

console.log(requests)

// axios.post('https://logisticbrocker.hopto.org/eat-beat/api/auth/sign-in', {
//   "email": "popovmaksim7415@gmail.com",
//   "password": "123456"
// }).then((res) => console.log(res))
// axios('http://localhost:5000/test').then((res) => console.log(res.data))
// axios.post('http://localhost:8081/api/auth/sign-in', {
//   "email": "popovmaksim7415@gmail.com",
//   "password": "123456"
// }).then((res) => console.log(res))
async function request() {
  let reqArr = [];
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbImNsaWVudCJdLCJlbWFpbCI6InBvcG92bWFrc2ltNzQxNUBnbWFpbC5jb20iLCJ1c2VyQWdlbnQiOiJheGlvcy8wLjIxLjAiLCJ1c2VySWQiOjEsIm5hbWUiOiJNYWtzaW0iLCJ0eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjA3OTUwNDQzLCJleHAiOjE2MDc5NTQwNDN9.r-8icJdp_iwgNE3bz9YKSOJwuI1oqP4eNda5vcrG1nk'
  }
  while (counter < 50) {
    counter++
    
    // await new Promise((res, rej) => setTimeout(() => res(), 0))
    // reqArr.push(axios('http://localhost:8081/api/meals/recommend-meals?date=2020-11-16', {
    //     method: 'get',
    //     headers
    //   }).then((res) => requests++).catch((err) => error++));
    // reqArr.push(axios('http://localhost:5000/test').then((res) => requests++).catch((err) => error++));
    // reqArr.push(axios('http://localhost:4002/api/test-api2').then((res) => requests++).catch((err) => error++));
    // reqArr.push(axios('http://localhost:4002/api/test-api3').then((res) => requests++).catch((err) => error++));
    // reqArr.push(axios('https://logisticbrocker.hopto.org/eat-beat/api/meals/recommend-meals?date=2020-11-16', {
    //   method: 'get',
    //   headers
    // }).then((res) => requests++).catch((err) => error++));
    // reqArr.push(axios('http://localhost:4000/recipe/test?apiKey=32$HE!KDJF$8934df3dkfjH').then((res) => requests++).catch((err) => error++))
  }
  console.log('while ended')
  await Promise.all(reqArr)//.then((res) => res).catch((err) => console.log(err))
  console.log(requests, error)
}

request()