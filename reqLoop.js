const autocannon = require('autocannon');
async function foo() {
  const result = await autocannon({
    url: 'https://logisticbrocker.hopto.org/eat-beat/api/main/terms-of-use',
    connections: 20,
    pipelining: 1,
    duration: 10,
    // connectionRate: 500,
    headers: {
      'user-agent': 'test-agent',
    },
  });
  console.log(result);
}

foo();