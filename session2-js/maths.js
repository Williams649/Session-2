function maths ()
{
   addition ="This is the product of two or more numbers"
   subtraction = "This is the removal of a quantity from a number"
   multiplication = "This is the increase of anumber by a specific amount"
   division = "This is the reduction of a number by a specified amount"

   operator = prompt ("Please enter one of the following: add, subtract, divide or multiply", "")

   if (operator == "add") {
       op1 = "You have selected ADDITION, "
       document.getElementById("maths").innerHTML = op1 + addition
   }

   else
   if (operator == "subtract") {
   op2 = "You have selected SUBTRACTION, "
   document.getElementById("maths").innerHTML = op2 + subtraction
   }

   else
   if (operator == "multiply") {
   op3 = "You have selected MULTIPLICATION, "
   document.getElementById("maths").innerHTML = op3 + multiplication
   }

   else
   if (operator == "divide") {
   op3 = "You have selected DIVISION, "
   document.getElementById("maths").innerHTML = op3 + division
   }

   else
   if (operator == "") {
   op4 = "You have selected nothing, try again"
   document.getElementById("maths").innerHTML = op4
   }
}
