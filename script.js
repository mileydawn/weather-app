

var userInput;


document.getElementById('submit').onclick = function() {
userInput = parseInt(document.getElementById("weather").value) * 1.8 + 7;	
console.log(userInput);

if (userInput < 25) {
	document.getElementById('temp').innerHTML = userInput + "°F";	
	document.getElementById('pic').innerHTML = "It's winter!";
	document.body.style.backgroundImage = 'url("winter.jpg")';
	document.body.style.backgroundSize = "cover";
    document.getElementById("weather").value= "reset";
} 
else if (userInput > 50 && userInput < 70) {
	document.getElementById('temp').innerHTML = userInput + "°F";	
	document.getElementById('pic').innerHTML = "It's spring!";
	document.body.style.backgroundImage = 'url("spring.jpg")';
	document.body.style.backgroundSize = "cover";
	document.getElementById("weather").value= "reset";
}  
else if (userInput >= 70) {
	document.getElementById('temp').innerHTML = userInput + "°F";	
	document.getElementById('pic').innerHTML = "It's Summer!";
	document.body.style.backgroundImage = 'url("summer.jpg")';
	document.body.style.backgroundSize = "cover";
	document.getElementById("weather").value= "reset";
} 
else if (userInput <=50 && userInput>25) {
	document.getElementById('temp').innerHTML = userInput + "°F";	
	document.getElementById('pic').innerHTML = "It's Fall!";
	document.body.style.backgroundImage = 'url("fall.jpg")';
	document.body.style.backgroundSize = "cover";
	document.getElementById("weather").value= "reset";
	}

}