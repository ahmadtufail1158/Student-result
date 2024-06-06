
var marks = prompt("Enter Your Marks")
if(marks >= 90 && marks <= 100){
    alert("Grade A")
}
else if(marks >= 80 && marks < 90){
    alert("Grade B")
}

else if(marks >= 70 && marks < 80){
    alert("Grade C")
}

else if(marks >= 60 && marks <70){
    alert("Grade D")
}

else if( marks >= 0 && marks < 60){
    alert("You are Fail!")
}
if ( marks < 0 || marks > 100) {
    alert(" Appropriate Error Message")
   }

