let numSquare = 6;
let colors = getRandomColor(numSquare);
let h1 = document.querySelector("h1");
let pickedColor = pickColor();
let messageDisplay = document.querySelector("#message");
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;
//change the styling of h1 
easyBtn.addEventListener("click",function(){
easyBtn.classList.add("selected");
hardBtn.classList.remove("selected");
numSquare = 3;
colors = getRandomColor(numSquare);
//play again button should be changed to  new colors
pickedColor = pickColor();
colorDisplay.textContent  = pickedColor;
for(let i=0;i<squares.length;i++){
if(colors[i]){
	squares[i].style.background = colors[i];
}
else{
	squares[i].style.display = "none";
}
}
});

hardBtn.addEventListener("click",function(){
easyBtn.classList.remove("selected");
hardBtn.classList.add("selected");
numSquare = 6;
colors = getRandomColor(numSquare);

pickedColor = pickColor();
colorDisplay.textContent  = pickedColor;
for(let i=0;i<squares.length;i++){

	squares[i].style.background = colors[i];

	squares[i].style.display = "block";

}
});

resetButton.addEventListener("click",function(){
//generate all new colors
	colors = getRandomColor(numSquare);
	//pick a new random color
pickedColor = pickColor();
//change colorDisplay to match picked color
colorDisplay.textContent = pickedColor;
//change colors of squares
for(let i=0;i<squares.length;i++){
	squares[i].style.background = colors[i];
}
messageDisplay.textContent = "";
//change the h1 color
h1.style.background = "steelblue";

});


for(let i=0;i<squares.length;i++){
	//to provide colors to all the squares
	squares[i].style.background = colors[i];

//adding click functions to the square
	squares[i].addEventListener("click",function(){

		//grab the color of the clicked square
      let clickedColor = this.style.background;

//comparing the clickedcolor to the picked color
      if(clickedColor === pickedColor){
      	messageDisplay.textContent = "Correct";
      	changeColors(clickedColor);//function that turns all the squares to the clickedcolor
      	h1.style.background = clickedColor;
      	resetButton.textContent = "Play again";
      }
      else{
      	this.style.background = "black";
      	messageDisplay.textContent = "Try Again";
      }
	});
}

//function turns all the squares to the picked color
function changeColors(color){
for(let i=0;i<squares.length;i++){
	squares[i].style.background = color;
}
}

//function gives a random color to be picked
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//getting random colors to the square
function getRandomColor(num){
    let arr = [];
	for(let i=0;i<num;i++){
        arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", "+ b +")";
}