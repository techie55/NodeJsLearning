const fs = require('fs');


const dataBuffer = fs.readFileSync('1-json.json');
const dataJSONString = dataBuffer.toString();
const user = JSON.parse(dataJSONString);
user.name = "Johnson";
user.age = 46;

console.log(user);
const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);