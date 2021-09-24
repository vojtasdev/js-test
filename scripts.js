console.log("JavaScript");

let colors = ["blue", "red", "green", "orange"];

console.log(colors);

let age = 33;

if(age > 18) {
    console.log("You are an adult!");
} else {
    console.log("You are a kid!");
}

for(let i = 0; i < 10; i++) {
    console.log(i);
}

let greeter = name => {
    console.log(`Hello, ${name}`);
    if(name === "VojtasCz") {
        console.log("He is an adult")
    }
}

greeter("VojtasCz");

console.log("This is the end of our code");