const myheading = document.querySelector('h1');
myheading.textContent = "Hello World";

/* Declaring Variables in Javascript */
let myVariable;

/* Javascript Types */
myVariable = "Bill";
let myNumber  = 10;
let myBoolean = true;
let myArray = [1,"Bill",20.5];
let myObject = document.querySelector("p");

let myDate = new Date();

/* Operators in Javascript. */

 let a = "Hello";
 let b = "World";
 let c = a + b;
 let d = 30-20;
 let m = 30*20;
 let div = 30/20;
d+=30;
d-=10;
let value1 = 10;
let value2 = '10';

let equ = value1==value2;
let equ1 = value1 === value2;
equ = value1 != value2;
equ = value1 !== value2;

/* Control Structures */
let marks = 50;
if (marks>=70){
    alert("You got a A");
}
else if(marks>=60) {
    alert("You got a B");
}
else if(marks>=50){
    alert("You got a C");
}
else if(marks>=40){
    alert("You got a D");
}
else{
    alert("You got an F");
}

let i;
let sum = 0;
for(i=0;i<10;i++){
    sum+=i;
}

while(i<10){
    sum +=i;
}

let day = 2;
switch(day){
    case 1:
        dayword = "Sunday";
    case 2:
        dayword = "monday"
    default:
        dayword = "Some other day";
}

btn = document.getElementById("clickme");
btn.addEventListener("click",multiply(10,20));

/*Javascript Functions */
function multiply(num1, num2){
    let result = num1 * num2;
    alert(result)
}

//Event Handling
alert(multiply(20,30));

//Javascript Events

document.querySelector('html').onclick = multipy(30,40);

