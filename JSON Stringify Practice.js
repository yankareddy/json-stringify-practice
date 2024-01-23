let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];
const stringifiedValueOfBikes = JSON.stringify(bikes);
const stringifiedValueOfPerson = JSON.stringify(person);
const stringifiedValueOftodos = JSON.stringify(todos);
const jsonContainerElement = document.getElementById("jsonContainer");

const textContentElement = document.createElement("h1");
textContentElement.textContent = stringifiedValueOfBikes + stringifiedValueOfPerson + stringifiedValueOftodos;
jsonContainerElement.appendChild(textContentElement);