
// KEYS GENERATING
function ailer(p, q) {
  return (p - 1) * (q - 1)
}

let firstSimpleNum = 29;
let secondSimpleNum = 31

let mod = firstSimpleNum * secondSimpleNum;
let ailerValue  = ailer(firstSimpleNum, secondSimpleNum); // should contain two simple nums
let ecsponent = 373; // should be simple, lower than module and mutually simple with module 

function calcPrivateKey() {
  let d = 17 // should bу (d * ecsponent) % ailer = 1
  return {d, module: mod}
}

let publicKey = {ecsponent, module: mod};
let privateKey = {module: mod};

// calculating d value by formula (d * e) % airValue === 1
for (let i = 20; i < 1000; i++) {
  if ((i * ecsponent) % ailerValue === 1) privateKey.d = i;
}

// ENCRYPTION
let message = "Hello world!"
function encrypt(message, { module }) {
  const result = [];
  let accumulator = 0;
  for (let i = 0; i < message.length; i++) {
    let charCode = message.charCodeAt(i);
    result.push((charCode + accumulator) % module) // here could be (message ** publicKey.ecsponent) % publicKey.module
    console.log('encrypt', accumulator, charCode)
    accumulator += charCode
  };
  return result;
}
let encrypted = encrypt(message, publicKey);

// DECRYPTION
function decrypt(encrypted, { module }) {
  let result = '';
  console.log(encrypted)
  for (let i = 0; i < encrypted.length; i++) {
    charCode = encrypted[i - 1] ? encrypted[i] - encrypted[i - 1] : encrypted[i];
    console.log(charCode)
    result += String.fromCharCode(charCode % module);
  }
  return result;
};

let decrypted = decrypt(encrypted, privateKey)

console.log(decrypted)