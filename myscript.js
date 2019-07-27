//Object destructuring

// const client = {
//   name: "Miguel",
//   type: "Premium",
//   data: {
//     location: {
//       city: "Tijuana",
//       country: "Mexico"
//     },
//     account: {
//       data: "16-07-2019",
//       money: 4000
//     }
//   }
// };

// //old method
// const clientName = client.name;
// const clientType = client.type;
// console.log(client);

//new method

// let {
//   name,
//   type,
//   data: {
//     location: { city, country },
//     account: { date, money }
//   }
// } = client;

// console.log(name);

// // object literal enhancement
// const n = "Angelo";
// const a = 30;

// const student = {
//   n,
//   a
// };

// console.log(student);

const people = [
  { name: "Carlos", age: 30 },
  { name: "Chris", age: 26 },
  { name: "Klibert", age: 28 },
  { name: "Travis", age: 25 },
  { name: "Mike", age: 30 },
  { name: "Angelo", age: 34 },
  { name: "Miguel", age: 19 },
  { name: "Sergio", age: 42 },
  { name: "Adam", age: 28 }
];

console.table(people);

const olders = people.filter(person => person.age > 30); //parameter => return

console.table(olders);

const Klibert = people.find(person => person.name === "Klibert");
console.table(Klibert);

let { learning } = Klibert;
console.log(learning);

let total = people.reduce((total, person) => total + person.age, 0);
console.log(total / people.length);
