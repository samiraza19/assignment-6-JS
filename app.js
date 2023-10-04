// Q 1
var today = new Date();
console.log(today)

// Q 2
function fullName() {
var firstName ="Muhammad" ;
var lastName ="Sami";
var fullName = firstName + " " + lastName 
console.log(fullName)
; 
}
fullName()
    
// Q 3
function sum() {
    var firstValue = +prompt("Enter First Value") ;
    var lastValue = +prompt("Enter Second Value");
    var fullValue = firstValue + lastValue 
    console.log(fullValue)
    ; 
    }
    sum()

// Q 4
function calc(num1, opr, num2) {
       if (opr === "+") {
        return num1 + num2;
       } else if (opr === "-") {
        return num1 - num2;
       } else if (opr === "*") {
         return num1 * num2;
       } else if (opr === "/") {
         return num1 / num2;
      }
     }
    
var num1 = +prompt("Enter first value");
var operator = prompt("Enter operator");
var num2 = +prompt("Enter second value");
    
var result = calc(num1, operator, num2);
console.log(result);

// Q 5
function square() {
    var firstValue = +prompt("Enter First Value") ;
    var fullValue = firstValue * firstValue; 
    console.log(fullValue);
}
square();

// Q 6
 function Factorial() {
if (number ==0){
    console.log("The factorial of " + number + "is" + 1)
}else if (number < 0){
    console.log("The factorial of negative number is not possible"  )  
}else 
for(var i=1;i<=number;i++){
    fact = fact * i
    console.log("The Factorial of " + number + " is " + fact)
}
 }

 var number = prompt("Enter The value to find Factorial")
var fact = 1

Factorial();

//  Q 7
function counting() {
    for(var i=number;i=value.length;i++){
        fact = fact * i
        console.log(number)
    }
     }
     var number = +prompt("Enter a number for counting")
    var value = +prompt("Enter a lenght for counting")
    
    counting();
    console.log(value)
  
// Q 8
function hypo() {
    var a = 10 ;
    var b = 5;
    var c = 10; 
    var s = (a+b+c)/2;
    var temp = s*(s-a)*(s-b)*(s-c);
    var area = Math.sqrt(temp)
    console.log(area); 
    }
    hypo()

    // Q 9
    function areaRec() {
        var width = +prompt("Enter the width") ;
        var height = +prompt("Enter the height") ;
        var area = width * height
        console.log(area);
    }
    areaRec();
    

// Q 10
var string = prompt("Enter a word")
var len = string.length
function palindrome() {
for (var i =0; i < len/2;i++){
    if (string[i] != string[len -1 - i]){
        console.log(string + "is not a polindrome");
    }else{
        console.log(string + " " + "is a polindrome")
    }
    
}
}
palindrome()

