//Part 1

function greeting() {
    return "Good Morning!";
}

let message1 = greeting;
message1();
greeting();

//Part 2

function greeting() {
    return "Good Morning!";
}

function printMessage(anfunction) {
    console.log(anfunction());
}

printMessage(greeting);

//Part 3

function greeting() {
    return function () {
        return "Good Morning!";
    };
}

let anFunction = greeting();
let message = anFunction();
