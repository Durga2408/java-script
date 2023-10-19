//print the numbers upto 100 else whereas the all the even numbers should be sum and all the odd numbers should be product//
//using for loop;
let a = 0;
 let b = 1;
 for ( i=1; i<=100; i++){
    if(i % 2  === 0){
        a +=i;
    }
    else{
        b *=i;
    }
    
 }
console.log("the sum of even numbers is" +a);
console.log("the product of odd numbers is" +b);

 //using while loop
 let evennumbers = 0;
 let oddnumbers = 1;
 let numbers = 1;
 while(numbers<100){
    if (numbers % 2 ===0) {
        evennumbers += numbers;
    }
    else {
        oddnumbers *= numbers;
    }
    numbers++
 }
 console.log("the sum of even numbers is "+evennumbers);
 console.log("the product of add numbersis" +oddnumbers);
 //another ,method without using if and else statements:
 let theevennumbers = 0;
 let theoddnumbers = 1;
 for (i=1; i<=100; i++){
    i % 2 == 0 ? (theevennumbers +=i): (theoddnumbers *=i);
    console.log(+theevennumbers);
    console.log(+theoddnumbers);
 }
