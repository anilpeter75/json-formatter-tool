const { formatJSON, minifyJSON } = require("./index");

const input = '{"name":"Anil","age":30}';

console.log("Formatted JSON:");
console.log(formatJSON(input));

console.log("\nMinified JSON:");
console.log(minifyJSON(input));
