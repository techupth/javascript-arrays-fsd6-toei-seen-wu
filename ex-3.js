const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

employees[0].hobbies.unshift("Watching basketball");
console.log(employees[0]);
console.log(employees[1]);
