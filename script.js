var inputGrade = prompt("Enter a grade:");
var numberGrade = parseInt(inputGrade);
var letterGrade;

// Add your code below

if (numberGrade>=90){ 
           alert ( "A");
}
 else if (numberGrade >=80){ 
  alert ("B");
}  
 else if (numberGrade >=70 ){
    alert ("C");
  }
 else if (numberGrade >=60){
   alert ("D");
 }
 
 else letterGrade=F;
 
alert (letterGrade);