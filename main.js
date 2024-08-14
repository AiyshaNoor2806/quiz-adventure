import inquirer from "inquirer";
console.log("welcome to my adventure quiz game:");
console.log("you are required to gain maximium 4 points for the window.");
let points = 0;
//question 1
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "typescript is a superset off?",
        type: "list",
        choices: ["python", "c++", "javascript",]
    }
]);
if (question1.one == "javascript") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question 2 
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "who is the founder of microsoft?",
        type: "list",
        choices: ["elon musk", "bill gates", "mark", "ali"]
    }
]);
if (question2.two == "bill gates") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question 3 
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "capital of pakistan?",
        type: "list",
        choices: ["karachi", "punjab", "islamabad", "kpk"]
    }
]);
if (question3.three == "islamabad") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question 4
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "who is the current governor of sindh?",
        type: "list",
        choices: ["wajahat", "bilal", "kamran tessori", "ali"]
    }
]);
if (question4.four == "kamran tessori") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question 5 
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "in which language you are hearing my voice?",
        type: "list",
        choices: ["france", "urdu", "english", "sindhi"]
    }
]);
if (question5.five == "urdu") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question 6 
let question6 = await inquirer.prompt([
    {
        name: "six",
        message: "in array we use?",
        type: "list",
        choices: ["curly brackets", "square brackets", "template literal",]
    }
]);
if (question6.six == "square brackets") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question 7 
let question7 = await inquirer.prompt([
    {
        name: "seven",
        message: "complete name of pakistan is ?",
        type: "list",
        choices: ["islamic republic of pakistan", "pakistan zindabad", "islamic pakistan",]
    }
]);
if (question7.seven == "") {
    console.log("islamic republic of pakistan");
    points++;
}
else {
    console.log("incorrect answer");
}
//question 8 
let question8 = await inquirer.prompt([
    {
        name: "eight",
        message: "nationality of peoples living in pakistan is?",
        type: "list",
        choices: ["pakistani", "bangalian", "indian",]
    }
]);
if (question8.eight == "pakistani") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
// question 9 
let question9 = await inquirer.prompt([
    {
        name: "nine",
        message: "pakistanis celebrate independence day on?",
        type: "list",
        choices: ["23rd march", "15th august", "14th august",]
    }
]);
if (question9.nine == "14th august") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
//question 10 
let question10 = await inquirer.prompt([
    {
        name: "ten",
        message: "pakistan resolution day on?",
        type: "list",
        choices: ["24 december", "6 september", "23rd march",]
    }
]);
if (question10.ten == "23rd march") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
if (points >= 4) {
    console.log("congratulations!");
}
