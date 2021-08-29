const stuinfo = JSON.stringify({ name: "James", roll: 3 });
const stuvalue = JSON.parse(stuinfo);
console.log(stuvalue.name);