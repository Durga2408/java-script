//named function
function greet(name){
    return "Hello, "+name+"!";
}
var message=greet("jhon");
console.log(message);
//anonymous function
const add=function(x,y){
return x+y;
};
const result=add(3,5);
console.log(result);
//anonymous function
let names=function(){
    let name="Durga";
    let addName=name.concat(" Prasad");
    console.log(addName);
};
names();
//constructor function
function persondetails(name,age,gender,rollno){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.rollno=rollno;
}
let persondetails1=new persondetails("Raju",37,"male",234);
let persondetails2=new persondetails("Rani",34,"female",235);
console.log(persondetails1);
console.log(persondetails2);//call by refernce
console.log(persondetails2.age);//call by value
//arrow function
// function with parameters
let square=(x)=>x*x;
console.log(square(3));

//string
// let numbers=["raju","rani","kamal"];
// let results=numbers.filter(number=>number.length>4);
// console.log(results)
//immediatly invoked function
(function(number){
    let square=number*number;
    console.log("The square of "+ number+" is "+ square);
})(6);
//generator function
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generateNumbers();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
//recursive function
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}